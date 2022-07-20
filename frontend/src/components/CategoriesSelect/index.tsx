import { Form, notification, Select } from "antd";
import { useEffect, useState } from "react";
import { Category } from "../../pages/Categories";
import { api } from "../../services/api";
import { StandardResponse } from "../../types";

type Option = {
  label: string;
  value: string | number;
};

export const CategoriesSelect = () => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    async function loadOptions() {
      try {
        const response = await api.get<StandardResponse<Category>>(
          "api/v1/categories/"
        );

        if (response.data.results.length === 0) {
          notification.warn({
            message:
              "Nenhuma categoria cadastrada ainda. Cadastre uma para poder vinculá-la a um jogo.",
          });
          return;
        }

        const options = response.data.results.map((category) => ({
          label: category.name,
          value: category.id,
        }));

        setOptions(options);
      } catch (err) {
        notification.error({
          message: "Erro ao tentar carregar opções de categorias de jogos.",
        });
      }
    }

    loadOptions();
  }, []);

  return (
    <Form.Item
      name="category"
      label="Categoria do Jogo"
      rules={[
        {
          required: true,
          message: "Campo obrigatório",
        },
      ]}
    >
      <Select placeholder="Selecione uma categoria" options={options} />
    </Form.Item>
  );
};
