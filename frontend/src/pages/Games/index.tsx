import { EditOutlined } from "@ant-design/icons";
import { Button, notification, Table, Tag } from "antd";
import { ColumnProps } from "antd/lib/table";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Flex from "../../components/Flex";
import { api } from "../../services/api";

import * as S from "./styles";

export type Game = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: number;
  category_name: string;
  developer: number;
  developer_name: string;
  platforms: number;
  platforms_names: string;
};

export const Games = () => {
  const [data, setData] = useState<Game[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get("api/v1/games/");

        setData(response.data.results);
      } catch (err) {
        notification.error({
          message: "Erro ao tentar carregar dados. Tente novamente.",
        });
      }
    }

    loadData();
  }, []);

  const columns: ColumnProps<Game>[] = [
    {
      title: "Nome",
      dataIndex: "name",
    },
    {
      title: "Descrição",
      dataIndex: "description",
    },
    {
      title: "Categoria",
      dataIndex: "category_name",
    },
    {
      title: "Desenvolvedor",
      dataIndex: "developer_name",
    },
    {
      title: "Plataformas",
      dataIndex: "platforms_names",
    },
    {
      title: "Preço",
      dataIndex: "price",
      align: "right",
      render: (price) =>
        price === "0.00" ? <Tag color="green">Free</Tag> : price,
    },
    {
      title: "Ações",
      dataIndex: "id",
      align: "center",
      render: (id) => (
        <Link to={`/games/${id}`}>
          <Button shape="circle" icon={<EditOutlined />} />
        </Link>
      ),
    },
  ];

  return (
    <S.Wrapper>
      <Flex justify="space-between">
        <h1>Jogos</h1>

        <Link to="/games/create">
          <Button type="primary">Criar Novo</Button>
        </Link>
      </Flex>

      <Table dataSource={data} columns={columns} />
    </S.Wrapper>
  );
};
