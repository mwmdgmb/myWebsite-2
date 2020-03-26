import React , {Component} from 'react';
import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/BasePages";
import {getPosts} from "../actions";



class Posts extends Component {

    static async getInitialProps(){
        const posts = await getPosts();

        return {posts}
    }


    // constructor(props) {
    //     super(props);
    // }


    render() {
        const {posts} = this.props ;
        return(
            <BaseLayout>
                <BasePage>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Service</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        {posts.map((post)=>(
                            <tbody key={post.id}>

                            <tr>
                                <th scope="row">{post.id}</th>
                                <td className="text-muted">{post.title}</td>
                                <td className="text-primary">US</td>
                                <td className="text-danger">False</td>
                            </tr>

                        </tbody>
                        ))}
                    </table>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Posts ;