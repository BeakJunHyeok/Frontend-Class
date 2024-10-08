import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin: 0 auto;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  & * {
    margin-bottom: 16px;
  }
`;

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate("/post-write");
          }}
        />
        <PostList
          posts={data}
          onClickItem={(item) => navigate(`/post/${item.id}`)}
        />
      </Container>
    </Wrapper>
  );
};

export default MainPage;
