import React, { useState, useEffect } from 'react'
import { Paper, TextField, Typography, Button } from '@material-ui/core'
import useStyles from './style'
import FileBase from 'react-file-base64'
import { createPost, updatedPost } from '../../actions/posts.js'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


const Form = ({ currentId, setcurrentId }) => {
       
        const dispatch = useDispatch();
        const [postData, setpostData] = useState({
                creator: '', title: '', message: '', tags: '', selectedFile: ''
        })

        const singlePost = useSelector((state) => currentId ? state.posts.find((f) => f._id === currentId) : null)
        useEffect(() => {
                if (singlePost) setpostData(singlePost)
                console.log(singlePost,'post')
        }, [singlePost])
        // const singlePost = 
        const classes = useStyles()
        const handleSubmit = (e) => {
                e.preventDefault()
                if (currentId) {
                        dispatch(updatedPost(currentId, postData))
                }
                dispatch(createPost(postData))

                clear()
        }

        const clear = (e) => {
                setcurrentId(null)
        setpostData({creator:'',title:'',tags:'',message:'' ,selectedFile:''})
        }
        return (
                <Paper className={classes.paper}>
                        <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate onSubmit={handleSubmit}>
                                <Typography variant="h6">{ currentId ? 'Editing Memomry' : 'Creating a memory'}</Typography>
                                <TextField name="creator"
                                        variant="outlined"
                                        label="Creator"
                                        fullWidth
                                        value={postData.creator}
                                        onChange={(e) => setpostData({ ...postData, creator: e.target.value })}>

                                </TextField>
                                <TextField
                                        name="title"
                                        variant="outlined"
                                        label="Title"
                                        fullWidth
                                        value={postData.title}
                                        onChange={(e) => setpostData({ ...postData, title: e.target.value })}>

                                </TextField>
                                <TextField
                                        name="message"
                                        variant="outlined"
                                        label="Message"
                                        fullWidth
                                        value={postData.message}
                                        onChange={(e) => setpostData({ ...postData, message: e.target.value })}>

                                </TextField>

                                <TextField
                                        name="tags"
                                        variant="outlined"
                                        label="tags"
                                        fullWidth
                                        value={postData.tags}
                                        onChange={(e) => setpostData({ ...postData, tags: e.target.value.split(', ') })}>

                                </TextField>
                                <div className={classes.fileInput}>
                                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setpostData({ ...postData, selectedFile: base64 })} />
                                </div>

                                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>submit</Button>
                                <Button onClick={clear} variant="contained" color="secondary" size="small" type="submit" fullWidth>cancel</Button>
                        </form>
                </Paper>
        )
}

export default Form
