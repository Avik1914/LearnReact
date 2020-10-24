import React from 'react'
import ReactDom from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
            
            <div className="ui container comments">
                <ApprovalCard>
                    <CommentDetail author="Avik" timeAgo="Today at 4:00PM"
                    blogPost="Nice Work Done!!!" image={faker.image.avatar()}/>
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail author="Souvik" timeAgo="Today at 5:00PM"
                    blogPost="Great Work!!!" image={faker.image.avatar()}/>
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail author="Arpa" timeAgo="Today at 6:00PM"
                    blogPost="Good but can be Better!!!" image={faker.image.avatar()}/>
                </ApprovalCard>
            </div>

    );
};

ReactDom.render(<App/>,document.querySelector('#root'));