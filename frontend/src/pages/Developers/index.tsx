import { EditOutlined } from "@ant-design/icons";
import { Button, notification, Table } from "antd";
import { ColumnProps } from "antd/lib/table";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Flex from "../../components/Flex";
import { api } from "../../services/api";

import * as S from "./styles";

export type Developer = {
  name: string;
  description: string;
  price: number;
};

export const Developers = () => {
  const [data, setData] = useState<Developer[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get("api/v1/developers/");

        setData(response.data.results);
      } catch (err) {
        notification.error({
          message: "Erro ao tentar carregar dados. Tente novamente.",
        });
      }
    }

    loadData();
  }, []);

  const columns: ColumnProps<Developer>[] = [
    {
      title: "Nome",
      dataIndex: "name",
    },
    {
      title: "Ações",
      dataIndex: "id",
      align: "center",
      render: (id) => (
        <Link to={`/developers/${id}`}>
          <Button shape="circle" icon={<EditOutlined />} />
        </Link>
      ),
    },
  ];

  return (
    <S.Wrapper>
      <Flex justify="space-between">
        <h1>Desenvolvedores</h1>

        <Link to="/developers/create">
          <Button type="primary">Criar Novo</Button>
        </Link>
      </Flex>

      <Table dataSource={data} columns={columns} />
    </S.Wrapper>
  );
};
