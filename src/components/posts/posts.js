import React from 'react'
import Post from './post/post'
import useStyles from './style'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'

const Posts = ({currentId,setcurrentId}) => {
    const allPost = useSelector((state) => state.posts)
    const classes = useStyles()

    console.log('post', allPost)
    return (
        !allPost.length ? <CircularProgress/> : (
                <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3} >
                    {allPost.map((post) => (
                        <Grid item key={post._id} xm={12} sm={6}>
                            <Post posting={post} setcurrentId={setcurrentId}/>
                        </Grid>
                    ))}
                </Grid>
            )

    )
}


export default Posts
