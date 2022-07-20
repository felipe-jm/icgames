import { EditOutlined } from "@ant-design/icons";
import { Button, notification, Table } from "antd";
import { ColumnProps } from "antd/lib/table";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Flex from "../../components/Flex";
import { api } from "../../services/api";

import * as S from "./styles";

export type Platform = {
  name: string;
  description: string;
  price: number;
};

export const Platforms = () => {
  const [data, setData] = useState<Platform[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get("api/v1/platforms/");

        setData(response.data.results);
      } catch (err) {
        notification.error({
          message: "Erro ao tentar carregar dados. Tente novamente.",
        });
      }
    }

    loadData();
  }, []);

  const columns: ColumnProps<Platform>[] = [
    {
      title: "Nome",
      dataIndex: "name",
    },
    {
      title: "Ações",
      dataIndex: "id",
      align: "center",
      render: (id) => (
        <Link to={`/Platforms/${id}`}>
          <Button shape="circle" icon={<EditOutlined />} />
        </Link>
      ),
    },
  ];

  return (
    <S.Wrapper>
      <Flex justify="space-between">
        <h1>Plataformas</h1>

        <Link to="/Platforms/create">
          <Button type="primary">Criar Nova</Button>
        </Link>
      </Flex>

      <Table dataSource={data} columns={columns} />
    </S.Wrapper>
  );
};
