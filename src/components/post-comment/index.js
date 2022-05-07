import { useState } from "react";
import reportsApi from "../../utils/reportsApi";
import { Form, Input, Button } from "./styles"
import ProfileImage from "../ProfileImage";

const PostComment = ({ reportId, user, comments, setComments }) => {
    const [comment, setComment] = useState("");

    const handlePostComment = async event => {
        event.preventDefault();

        if (comment) {
            const newComment = await reportsApi.postComment(reportId, comment);
            setComments([newComment, ...comments]);
            setComment("");
        };
    };

    return (
        <Form onSubmit={handlePostComment}>
            <ProfileImage image={user.profileImage} size={50} margin="0 10px 0 4px" />
            <Input type="text" placeholder="Write something..." value={comment} onChange={e => setComment(e.target.value)} />
            <Button>Post</Button>
        </Form>
    );
};

export default PostComment;