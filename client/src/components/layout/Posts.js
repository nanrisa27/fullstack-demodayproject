import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Posts extends Component {
    render() {
        return (
            <div>
                <nav className="navbar bg-dark">
                    <h1>
                        <Link to="index.html"><i className="fas fa-code"></i> DevConnector</Link>
                    </h1>
                    <ul>
                        <li><Link to="profiles.html">Developers</Link></li>
                        <li><Link to="posts.html">Posts</Link></li>
                        <li>
                            |
          <Link to="dashboard.html" title="Dashboard"
                            ><i className="fas fa-user"></i>
                                <span className="hide-sm">Dashboard</span></Link>

                        </li>
                        <li>
                            <Link to="/login" title="Logout">
                                <i className="fas fa-sign-out-alt"></i>
                                <span className="hide-sm">Logout</span></Link>

                        </li>
                    </ul>
                </nav>
                <section className="container">
                    <h1 className="large text-primary">
                        Posts
      </h1>
                    <p className="lead"><i className="fas fa-user"></i> Welcome to the community!</p>

                    <div className="post-form">
                        <div className="bg-primary p">
                            <h3>Say Something...</h3>
                        </div>
                        <form className="form my-1">
                            <textarea
                                name="text"
                                cols="30"
                                rows="5"
                                placeholder="Create a post"
                                required
                            ></textarea>
                            <input type="submit" className="btn btn-dark my-1" value="Submit" />
                        </form>
                    </div>

                    <div className="posts">
                        <div className="post bg-white p-1 my-1">
                            <div>
                                <Link to="profile.html">
                                    <img
                                        className="round-img"
                                        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                                        alt=""
                                    />
                                    <h4>John Doe</h4>
                                </Link>
                            </div>
                            <div>
                                <p className="my-1">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                                    possimus corporis sunt necessitatibus! Minus nesciunt soluta
                                    suscipit nobis. Amet accusamus distinctio cupiditate blanditiis
                                    dolor? Illo perferendis eveniet cum cupiditate aliquam?
            </p>
                                <p className="post-date">
                                    Posted on 04/16/2019
            </p>
                                <button type="button" className="btn btn-light">
                                    <i className="fas fa-thumbs-up"></i>
                                    <span>4</span>
                                </button>
                                <button type="button" className="btn btn-light">
                                    <i className="fas fa-thumbs-down"></i>
                                </button>
                                <Link to="post.html" className="btn btn-primary">
                                    Discussion <span className='comment-count'>2</span>
                                </Link>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>

                        <div className="post bg-white p-1 my-1">
                            <div>
                                <Link to="profile.html">
                                    <img
                                        className="round-img"
                                        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                                        alt=""
                                    />
                                    <h4>John Doe</h4>
                                </Link>
                            </div>
                            <div>
                                <p className="my-1">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                                    possimus corporis sunt necessitatibus! Minus nesciunt soluta
                                    suscipit nobis. Amet accusamus distinctio cupiditate blanditiis
                                    dolor? Illo perferendis eveniet cum cupiditate aliquam?
            </p>
                                <p className="post-date">
                                    Posted on 04/16/2019
            </p>
                                <button type="button" className="btn btn-light">
                                    <i className="fas fa-thumbs-up"></i>
                                    <span>4</span>
                                </button>
                                <button type="button" className="btn btn-light">
                                    <i className="fas fa-thumbs-down"></i>
                                </button>
                                <Link to="post.html" className="btn btn-primary">
                                    Discussion <span className='comment-count'>3</span>
                                </Link>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
