import { Div, Input, Button } from "./styles"
import ProfileImage from "../ProfileImage";

const PostComment = ({ user }) => {
    return (
        <Div>
            <ProfileImage image={user.profileImage} size={50} margin="0 10px 0 4px" />
            <Input type="text" placeholder="Write something" />
            <Button>Post</Button>
        </Div>
    );
};

export default PostComment;