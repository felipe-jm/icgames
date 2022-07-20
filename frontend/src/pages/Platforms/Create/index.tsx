import { Button, Form, Input, notification, Select } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Flex from "../../../components/Flex";
import { api } from "../../../services/api";
import { history } from "../../../services/history";
import * as S from "./styles";

type CreatePlatformParams = {
  id?: string;
};

export const CreatePlatform = () => {
  const { id } = useParams<CreatePlatformParams>();

  const [form] = Form.useForm();

  useEffect(() => {
    async function loadData() {
      try {
        if (!id) return;

        const response = await api.get(`api/v1/platforms/${id}/`);

        form.setFieldsValue(response.data);
      } catch (err) {
        notification.error({
          message: "Erro ao tentar carregar dados. Tente novamente.",
        });
      }
    }

    loadData();
  }, []);

  const onFinish = async (values: any) => {
    try {
      if (id) {
        await api.put(`api/v1/platforms/${id}/`, values);
      } else {
        await api.post("api/v1/platforms/", values);
      }

      notification.success({
        message: "Plataforma salva com sucesso!",
      });

      history.push("/platforms");
    } catch (err) {
      notification.error({
        message: "Erro ao tentar criar plataforma. Tente novamente.",
      });
    }
  };

  return (
    <S.Wrapper>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          name="name"
          label="Nome"
          rules={[
            {
              required: true,
              message: "Campo obrigatório",
            },
          ]}
        >
          <Select
            placeholder="Seleciona uma plataforma"
            options={[
              {
                label: "Windows",
                value: "Windows",
              },
              {
                label: "Macos",
                value: "Macos",
              },
              {
                label: "Linux",
                value: "Linux",
              },
            ]}
          />
        </Form.Item>

        <Flex justify="flex-end">
          <Button htmlType="submit">Salvar</Button>
        </Flex>
      </Form>
    </S.Wrapper>
  );
};
