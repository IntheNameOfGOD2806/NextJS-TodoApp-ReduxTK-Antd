"use client";
import { addTodo } from "@/lib/features/todo/todoSlice";
import { useAppDispatch } from "@/lib/hooks";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, message } from "antd";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Card1 = (props) => {
  const dispatch = useAppDispatch();
  const inpRef = useRef(null);
  const [messageApi, contextHolder] = message.useMessage();
  const EmptyTitleInput = () => {
    messageApi.open({
      type: "error",
      content: "Title cannot be empty",
    });
  };
  const AddedSuccess = () => {
    messageApi.info(" Todo added successfully");
  };
  //   const [todoTitle, setTodoTitle] = useState("");
  return (
    <>
      {contextHolder}
      <Card
        title="Create Todo"
        bordered={false}
        style={{
          width: 700,
        }}
      >
        <Form
          ref={inpRef}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          onFinish={(value) => {
            if (value.title === "") {
              EmptyTitleInput();
              return;
            }

            dispatch(
              addTodo({
                id: uuidv4(),
                title: value.title,
                completed: false,
              })
            );
            AddedSuccess();
          }}
        >
          <Form.Item
            style={{ marginTop: "20px", marginLeft: "-160px" }}
            label="Todo Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input your todo title!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Button
            icon={<PlusCircleOutlined />}
            style={{ float: "right" }}
            type="primary"
            htmlType="submit"
          >
            Add Todo
          </Button>
        </Form>
        <div style={{ marginTop: "20px" }}></div>
      </Card>
    </>
  );
};

export default Card1;
