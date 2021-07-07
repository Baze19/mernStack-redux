
import React, { useState } from 'react'
import useStyles from './style'
import { Card, CardMedia, Button, Typography, CardActions, CardContent } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../../Apis'
import { deletedPost, likedPost } from '../../../actions/posts'
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useHistory } from 'react-router-dom'

const Post = ({ posting, setcurrentId }) => {
    // const [currentId,setcurrentId] = useState(null)
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles()
    const user = JSON.parse(localStorage.getItem('Profile'));
 
    const Likes = () => {
        if (posting.likes.length > 0) {
            return posting.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                    <><ThumbUpAltIcon fontSize="small" />&nbsp;{posting.likes.length > 2 ? `You and ${posting.likes.length - 1} others` : `${posting.likes.length} like${posting.likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><ThumbUpAltOutlined fontSize="small" />&nbsp;{posting.likes.length} {posting.likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={posting.selectedFile} title={posting.title} ></CardMedia>
            <div className={classes.overlay}>
                <Typography variant="h6">{posting.name}</Typography>
                <Typography variant="body2" >{moment(posting.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>

                {(user?.result?.googleId === posting?.creator || user?.result?._id === posting?.creator) && (

                    <Button style={{ color: 'white' }} onClick={() => setcurrentId(posting._id)}>
                        <MoreHorizIcon fontSize="default"/>
                    </Button>

                )}


            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="secondary" >{posting.tags.map((tag) => `# ${tag}`)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{posting.title} </Typography>
            <CardContent>
                <Typography variant="body2" color="secondary" component="p">{posting.message} </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likedPost(posting._id))}>

                    &nbsp;
                    <Likes />
                    &nbsp;

                </Button>



                {(user?.result?.googleId === posting?.creator || user?.result?._id === posting?.creator) ? (
                    <Button size="small" color="secondary" onClick={() => dispatch(deletedPost(posting._id,history))}>
                        <DeleteIcon fontSize="small" /> Delete
                    </Button>
                ):''}


            </CardActions>
        </Card>
    )
}

export default Post
