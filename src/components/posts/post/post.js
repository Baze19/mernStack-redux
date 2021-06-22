
import React,{useState} from 'react'
import useStyles from './style'
import { Card, CardMedia, Button, Typography, CardActions, CardContent } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../../Apis'
import {deletedPost,likedPost} from '../../../actions/posts'

const Post = ({ posting,setcurrentId }) => {
    // const [currentId,setcurrentId] = useState(null)
    const dispatch = useDispatch()
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={posting.selectedFile} title={posting.title} ></CardMedia>
            <div className={classes.overlay}>
                <Typography variant="h6">{posting.creator}</Typography>
                <Typography variant="body2" >{moment(posting.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} onClick={() => setcurrentId(posting._id) }>
                    <MoreHorizIcon fontSize="default" />Edit
                </Button>
                
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="secondary" >{posting.tags.map((tag) => `# ${tag}`)}</Typography>
            </div>
            <Typography  className={classes.title} variant="h5" gutterBottom>{posting.title} </Typography>
            <CardContent>
                <Typography   variant="body2" color="secondary" component="p">{posting.message} </Typography>
           </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likedPost(posting._id))}>
                <ThumbUpAltIcon fontSize="small" />
                &nbsp;
                Like
                &nbsp;
                {posting.likeCount}
                </Button>

                <Button size="small" color="secondary" onClick={() => {
                    alert('are you sure you want to delete this memory ?')
                    dispatch(deletedPost(posting._id))
                } }>
                <DeleteIcon fontSize="small" />
                delete
               
                </Button>
                
                
            </CardActions>
        </Card>
    )
}

export default Post
