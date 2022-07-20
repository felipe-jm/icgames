import { Form, notification, Select } from "antd";
import { useEffect, useState } from "react";
import { Developer } from "../../pages/Developers";
import { api } from "../../services/api";
import { StandardResponse, Option } from "../../types";

export const DevelopersSelect = () => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    async function loadOptions() {
      try {
        const response = await api.get<StandardResponse<Developer>>(
          "api/v1/developers/"
        );

        if (response.data.results.length === 0) {
          notification.warn({
            message:
              "Nenhum desenvolvedor cadastrado ainda. Cadastre um para poder vinculá-lo a um jogo.",
          });
          return;
        }

        const options = response.data.results.map((developer) => ({
          label: developer.name,
          value: developer.id,
        }));

        setOptions(options);
      } catch (err) {
        notification.error({
          message:
            "Erro ao tentar carregar opções de desenvolvedores de jogos.",
        });
      }
    }

    loadOptions();
  }, []);

  return (
    <Form.Item
      name="developer"
      label="Desenvolvedor do Jogo"
      rules={[
        {
          required: true,
          message: "Campo obrigatório",
        },
      ]}
    >
      <Select placeholder="Selecione um desenvolvedor" options={options} />
    </Form.Item>
  );
};
