import { Button, Input, Space, Table, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React, { useRef, useState, useMemo } from "react";
import Highlighter from "react-highlight-words";
import generateUser from "../../Utils/GenerateUser";
import { useNavigate } from "react-router-dom";

const AppBarHome = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const [sortedInfo, setSortedInfo] = useState({});
  const [state, setState] = useState({
    inputed: 40,
    totalUser: null,
  });

  const navigate = useNavigate();

  const data = useMemo(() => {
    return state.totalUser
      ? generateUser(state.totalUser)
      : require("../../Configs/dataEmployees.json");
  }, [state.totalUser]);

  const handleGenerated = (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, totalUser: prev.inputed }));
  };

  const handleTextChange = (e) => {
    setState((prev) => ({
      ...prev,
      inputed: e.target.value ? parseInt(e.target.value) : 0,
    }));
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setSortedInfo(sorter);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "Full Name",
      width: "15%",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "1",
    },
    {
      title: "Division",
      dataIndex: "division",
      key: "2",
      ...getColumnSearchProps("division"),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "3",
      sorter: (a, b) => a.age - b.age,
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "4",
    },
    {
      title: "Action",
      key: "id",
      fixed: "right",
      width: 100,
      render: (_, record) => {
        return (
          <>
            <Button
              type="link"
              onClick={() => navigate(`/detail/${record.key}`)}
            >
              Detail
            </Button>
          </>
        );
      },
    },
  ];

  const { Text, Title } = Typography;

  return (
    <>
      <Space style={{ marginBottom: "20px" }} direction="vertical">
        <Title level={4}>List Employee</Title>
        <Space direction="vertical">
          <Text>Lets do magic (You can generated random user here)</Text>
          <Input.Group compact>
            <Input
              style={{
                width: "100px",
              }}
              defaultValue={40}
              value={state.inputed}
              onChange={handleTextChange}
            />
            <Button type="primary" onClick={handleGenerated}>
              Generate
            </Button>
          </Input.Group>
        </Space>
      </Space>
      <Table
        columns={columns}
        dataSource={data}
        onChange={handleChange}
        scroll={{
          x: 1300,
        }}
      />
    </>
  );
};

export default AppBarHome;
