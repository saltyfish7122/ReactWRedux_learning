import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
    return(
            <div className = "ui container components">
                <ApprovalCard>
                    <div>
                        <h4>Warning!</h4>
                        Are you sure you want to do this?
                    </div>
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail
                                author="Sam"
                               timeAgo = "Today at 4:45PM"
                               comment = "Nice posts!"
                               avatar = {faker.image.avatar()}/>

                    </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail
                                author="Alex"
                               timeAgo = "Today at 2:00AM "
                               comment = "I love it!"
                               avatar = {faker.image.avatar()}/>
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail
                                author="Jane"
                               timeAgo = "Yesterday at 5:00PM"
                               comment = "Great!"
                               avatar = {faker.image.avatar()}/>
                </ApprovalCard>
            </div>
        );
};

ReactDOM.render(<App />, document.querySelector('#root'));
