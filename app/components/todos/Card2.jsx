"use client";
import {
  deleteTodo,
  updateTitle,
  updateTodo,
} from "@/lib/features/todo/todoSlice";
import { useAppDispatch } from "@/lib/hooks";
import {
  CheckOutlined,
  CloseOutlined,
  DeleteTwoTone,
  EditOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Input,
  List,
  message,
  Modal,
  Pagination,
  Select,
  Space,
  Switch,
  Tag,
  Typography,
} from "antd";
import React from "react";

const { Text, Link } = Typography;
const getTodoTitleById = (todos, id) => {
  const todo = todos.find((todo) => todo.id === id);
  return todo?.title;
};

const Card2 = (props) => {

  const dispatch = useAppDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const [itemOffset, setItemOffset] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(3);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [EditID, setEditID] = React.useState("");
  const [editValue, setEditValue] = React.useState("");

  const endOffset = itemOffset + itemsPerPage;
  const currentTodos = props.todos.slice(itemOffset, endOffset);
    const info = (title) => {
    Modal.info({
      title: "View Todo Title",
      content: (
        <div style={{ textAlign: "center" }}>
          <Text style={{ fontSize: "50px" }} type="success">
            {title}
          </Text>
        </div>
      ),
      onOk() {},
    });
  };
  const updateSuccess = () => {
    messageApi.info(" Todo updated successfully");
  };
  const DeleteSuccess = () => {
    messageApi.open({
      type: "warning",
      content: "Todo deleted successfully!",
    });
  };
  const handlePageClick = (page) => {
    const newOffset = (page - 1) * itemsPerPage;
    setItemOffset(newOffset);
  };
  //effect
  // useEffect(() => {
  //   if (EditID) {
  //     setEditValue(getTodoTitleById(props.todos, EditID));
  //   }
  // }, [EditID, props.todos]);

  return (
    <>
      {contextHolder}
      <Space wrap>
        <span style={{ color: "white" }}>Sort By:</span>
        <Select
          defaultValue="recently"
          style={{ width: 120 }}
          onChange={() => {}}
          options={[
            { value: "titleLength", label: "title length" },
            { value: "recently", label: "recently" },
          ]}
        />
      </Space>
      <Card
        scroll={true}
        title="Todo List"
        bordered={false}
        style={{
          width: 700,
        }}
      >
        <>
          {props?.todos && props?.todos?.length > 0 && (
            <List
              itemLayout="horizontal"
              dataSource={currentTodos}
              renderItem={(todo, index) => (
                <List.Item
                  style={
                    todo.completed === true
                      ? { textDecoration: "line-through" }
                      : { textDecoration: "none" }
                  }
                >
                  <Tag color={todo.completed === true ? "green" : "red"}>
                    {todo.title}
                  </Tag>

                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Switch
                      checkedChildren={<CheckOutlined />}
                      unCheckedChildren={<CloseOutlined />}
                      checked={todo.completed}
                      onClick={() => {
                        dispatch(updateTodo(todo.id));
                        updateSuccess();
                      }}
                    />
                    <Button
                      onClick={() => {
                        dispatch(deleteTodo(todo.id));
                        DeleteSuccess();
                      }}
                      icon={<DeleteTwoTone twoToneColor="red" />}
                    />
                    <Button
                      onClick={() => {
                        setIsModalOpen(true);
                        setEditID(todo.id);
                        setEditValue(todo.title);
                      }}
                      icon={<EditOutlined color="pink" />}
                    />
                    <Button
                      onClick={() => {
                        
                        info( todo.title);
                      }}
                      icon={<EyeOutlined />}
                    />
                  </span>
                </List.Item>
              )}
            />
          )}
          <Pagination
            onChange={(page) => {
              // console.log(page);
              return handlePageClick(page);
            }}
            style={{ float: "right" }}
            defaultCurrent={0}
            total={Math.ceil((props.todos.length * 10) / itemsPerPage)}
          />
        </>
      </Card>
      <Modal
        title={`Edit Title of this item`}
        open={isModalOpen}
        onOk={() => {
          dispatch(updateTitle({ id: EditID, title: editValue }));
          setIsModalOpen(false);

          setEditValue("");
          updateSuccess();
        }}
        onCancel={() => {
          setIsModalOpen(false);
          setEditValue("");
        }}
      >
        Title:
        <Input
          value={editValue}
          onChange={(e) => {
            setEditValue(e.target.value);
          }}
        />
      </Modal>
    </>
  );
};
export default Card2;
