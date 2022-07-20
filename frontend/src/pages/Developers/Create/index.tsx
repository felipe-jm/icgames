import { Button, Form, Input, notification, Select } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Flex from "../../../components/Flex";
import { api } from "../../../services/api";
import { history } from "../../../services/history";
import * as S from "./styles";

type CreateDeveloperParams = {
  id?: string;
};

export const CreateDeveloper = () => {
  const { id } = useParams<CreateDeveloperParams>();

  const [form] = Form.useForm();

  useEffect(() => {
    async function loadData() {
      try {
        if (!id) return;

        const response = await api.get(`api/v1/developers/${id}/`);

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
        await api.put(`api/v1/developers/${id}/`, values);
      } else {
        await api.post("api/v1/developers/", values);
      }

      notification.success({
        message: "Desenvolvedor salvo com sucesso!",
      });

      history.push("/developers");
    } catch (err) {
      notification.error({
        message: "Erro ao tentar criar desenvolvedor. Tente novamente.",
      });
    }
  };

  return (
    <S.Wrapper>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          name="name"
          label="Nome do Desenvolvedor"
          rules={[
            {
              required: true,
              message: "Campo obrigatório",
            },
          ]}
        >
          <Input placeholder="Nome do desenvolvedor. Ex: (CD PROJEKT RED)" />
        </Form.Item>

        <Flex justify="flex-end">
          <Button htmlType="submit">Salvar</Button>
        </Flex>
      </Form>
    </S.Wrapper>
  );
};
