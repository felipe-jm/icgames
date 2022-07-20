import { EditOutlined } from "@ant-design/icons";
import { Button, notification, Table } from "antd";
import { ColumnProps } from "antd/lib/table";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Flex from "../../components/Flex";
import { api } from "../../services/api";

import * as S from "./styles";

export type Category = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export const Categories = () => {
  const [data, setData] = useState<Category[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get("api/v1/categories/");

        setData(response.data.results);
      } catch (err) {
        notification.error({
          message: "Erro ao tentar carregar dados. Tente novamente.",
        });
      }
    }

    loadData();
  }, []);

  const columns: ColumnProps<Category>[] = [
    {
      title: "Nome",
      dataIndex: "name",
    },
    {
      title: "Ações",
      dataIndex: "id",
      align: "center",
      render: (id) => (
        <Link to={`/categories/${id}`}>
          <Button shape="circle" icon={<EditOutlined />} />
        </Link>
      ),
    },
  ];

  return (
    <S.Wrapper>
      <Flex justify="space-between">
        <h1>Categorias</h1>

        <Link to="/categories/create">
          <Button type="primary">Criar Nova</Button>
        </Link>
      </Flex>

      <Table dataSource={data} columns={columns} />
    </S.Wrapper>
  );
};
