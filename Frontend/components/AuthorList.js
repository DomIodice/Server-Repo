import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const AuthorList = ({authors}) => {
    return (
    <div style={{margin: '15px', display: 'flex', flexDirection: 'row', justifyContent: 'center',  padding: '2em'}}>
        {authors.map((author) => (
        <Card style={{padding: '15px', margin: '15px' }} elevation={3}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {author.name}
                </Typography>               
            </CardContent>
        </Card>
        ))}
    </div>
    )
}


export default AuthorList