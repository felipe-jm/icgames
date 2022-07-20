import { Form, notification, Select } from "antd";
import { useEffect, useState } from "react";
import { Platform } from "../../pages/Platforms";
import { api } from "../../services/api";
import { StandardResponse, Option } from "../../types";

export const PlatformsSelect = () => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    async function loadOptions() {
      try {
        const response = await api.get<StandardResponse<Platform>>(
          "api/v1/platforms/"
        );

        if (response.data.results.length === 0) {
          notification.warn({
            message:
              "Nenhuma plataforma cadastrada ainda. Cadastre uma para poder vinculá-la a um jogo.",
          });
          return;
        }

        const options = response.data.results.map((platform) => ({
          label: platform.name,
          value: platform.id,
        }));

        setOptions(options);
      } catch (err) {
        notification.error({
          message: "Erro ao tentar carregar opções de plataformas de jogos.",
        });
      }
    }

    loadOptions();
  }, []);

  return (
    <Form.Item
      name="platforms"
      label="Plataformas do Jogo"
      rules={[
        {
          required: true,
          message: "Campo obrigatório",
        },
      ]}
    >
      <Select
        mode="multiple"
        placeholder="Selecione as plataformas em que o jogo roda"
        options={options}
      />
    </Form.Item>
  );
};
