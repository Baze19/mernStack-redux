import React ,{ useEffect, useState } from 'react'
import { Container, Typography, Grid, AppBar, Grow } from '@material-ui/core'
// import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { getPost } from '../../actions/posts'

import Posts from '../../components/posts/posts'
import Form from '../../components/Form/form'


const Home = () => {

    const dispatch = useDispatch()
    // const classes = useStyles()
    const [currentId, setcurrentId] = useState(null)
    useEffect(() => {
        dispatch(getPost())
    }, [ dispatch ,currentId])

    return (
        <div>


            <Grow in>
                <Container>
                    <Grid container  justify="space-between" alignItems="stretch" spacing={3} >
                        <Grid item xm={12} sm={7}>
                            <Posts currentId={currentId} setcurrentId={setcurrentId} />
                        </Grid>
                        <Grid item xm={12} sm={4}>
                            <Form currentId={currentId} setcurrentId={setcurrentId} />
                        </Grid>
                    </Grid>

                </Container>
            </Grow>

        </div>
    )
}

export default Home
