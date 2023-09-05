import { ChatBubbleOutlineOutlined, FavoriteBorderOutlined, FavoriteOutlined, ShareOutlined } from "@mui/icons-material";
import { Box, Divider, Typography, IconButton, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend"
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";

const PostWidget = ({
    postUserId,
    name,
    description,
    location,
    picturePath,
    userPicturePath,
    likes, 
    comments}) => {
        const [isComments, setIsComments] = useState(false);
        const dispatch = useDispatch();
        const token = useSelector((state) => state.token);
        const loggedInUserId = useSelector((state) = state.user._id);
        /* POSTMODEL 
        likes: 
            {   
                type: Map, 
                of: Boolean
            }
        WE WILL HAVE LIKES THAT IS GOING TO LOOK LIKE
        likes = {
            "userid1": true,
            "userid2": true,
        }

        */
        const isLiked = Boolean(likes[loggedInUserId]);
        const likeCount = Object.keys(likes).length;

        const { palette } = useTheme();
        const primary = palette.primary.main;
        const main = palette.neutral.main;

        const patchLike = async () => {
            const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type" : application/json
                },
                body: JSON.stringify({userId: loggedInUserId})
            });
            const updatedPost = await response.json();
            dispatch(setPost({post: updatedPost}));
        }

        return (
            <>
            </>
        )
    }

    export default PostWidget;