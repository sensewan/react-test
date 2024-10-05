import React from "react";
import Comment from "./Comment";

const comment = [
    {
        name: "박승완",
        comment: "안녕하세요, 땡땡입니다.",
    },
    {
        name: "유재석",
        comment: "리액트 재미있어요!~",
    },
    {
        name: "강민경",
        comment: "저도 리액트 배워보고 싶어요!!",
    },
];

function CommentList(props) {
    return (
        <div>
            {comment.map((comment1) => {
                return (
                    <Comment name={comment1.name} comment={comment1.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;