import { Form, Input, Button, Select, Checkbox, Divider } from "antd";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

interface Category {
  id?: number;
  title: string;
  description?: string;
  active?: boolean;
}

interface Story {
  title: string;
  author?: string;
  image?: string;
  description?: string;
  categoryId?: number;
}

const StoryForm = () => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/categories");
      return res.data;
    },
  });

  const categoryMutation = useMutation({
    mutationFn: async (data: Category) => {
      const res = await axios.post("http://localhost:3000/categories", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Thêm danh mục thành công");
      
    },
    onError: () => {
      toast.error("Lỗi thêm");
    },
  });

  const storyMutation = useMutation({
    mutationFn: async (data: Story) => {
      const res = await axios.post("http://localhost:3000/stories", data);
      return res.data;
    },

    onSuccess: () => {
      toast.success("Thêm truyện thành công");
    },

    onError: () => {
      toast.error("Có lỗi xảy ra");
    },
  });

  const onFinishStory = (values: Story) => {
    storyMutation.mutate(values);
  };

  const onFinishCategory = (values: Category) => {
    categoryMutation.mutate(values);
  };

  return (
    <div style={{ maxWidth: 500 }}>
      <h2>Thêm danh mục</h2>

      <Form layout="vertical" onFinish={onFinishCategory}>
        <Form.Item
          label="Danh mục"
          name="title"
          rules={[{ required: true, message: "Nhập danh mục" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Miêu tả" name="description">
          <Input.TextArea rows={2} />
        </Form.Item>

        <Form.Item name="active" valuePropName="checked">
          <Checkbox>Active</Checkbox>
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          loading={categoryMutation.isPending}
        >
          Thêm danh mục
        </Button>
      </Form>

      <Divider />

      <h2>Thêm truyện</h2>

      <Form layout="vertical" onFinish={onFinishStory}>
        <Form.Item
          label="Tên truyện"
          name="title"
          rules={[{ required: true, message: "Nhập tên truyện" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Tác giả" name="author">
          <Input />
        </Form.Item>

        <Form.Item label="Image URL" name="image">
          <Input />
        </Form.Item>

        <Form.Item label="Mô tả" name="description">
          <Input.TextArea rows={2} />
        </Form.Item>

        <Form.Item label="Danh mục" name="categoryId">
          <Select
            placeholder="Chọn danh mục"
            options={categories?.map((c: Category) => ({
              label: c.title,
              value: c.id,
            }))}
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          loading={storyMutation.isPending}
        >
          Thêm truyện
        </Button>
      </Form>
    </div>
  );
};

export default StoryForm;
