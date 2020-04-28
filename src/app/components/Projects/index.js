import React, { Component } from 'react';
import { withFirebase } from '../../util/Firebase';
import TimeAgo from '../../util/TimeAgo';
import logo from '../../../assets/logo.png';

class ProjectsPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      projects: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.projects().orderBy('time').get().then(
      querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = {
              'id': doc.id,
              'title': doc.data().title,
              'link': doc.data().link,
              'image': doc.data().image,
              'description': doc.data().description,
              'time': doc.data().time
            };
            this.state.projects.push(data);
            if (this.state.projects.length > 0){
              this.setState({ loading: false })
            }
          })
        }
      )
  }

  render() {
    const { projects, loading } = this.state;
    return (
      <div>
        <h1>Projects</h1>
        {loading && <div>Loading ...</div>}
        {projects ? (
          <ProjectList projects={projects.sort((a,b) => new Date(b.time) - new Date(a.time))} />
        ) : (
          <div>There are no projects ...</div>
        )}
      </div>
    );
  }
}

const ProjectList = ({ projects }) => (
  <div>
    {projects.map(project => (
      <ProjectItem key={project.id} project={project} />
    ))}
  </div>
);

const ProjectItem = ({ project }) => (
  <div className="project-container">
    <div className="title">
      <img class="logo" src={logo} alt="woodRock github logo"/>
      <span className="project-title-text">
        <span className="secondary"> @woodRock</span> •
        <i className="secondary"> {TimeAgo( { date: project.time} )}</i>
      </span>
      <div className="description">
        <h2>{project.title}</h2>
        {project.description}
      </div>
    </div>
    <div className="project">
      <a href={project.link}>
        <img width="100%" height="width" src={project.image} alt={project.title}/>
      </a>
      <div>
        <a href={project.link} className="github-link">
          <i className="fa fa-github"></i>
        </a>
      </div>
    </div>
  </div>
);

export default withFirebase(ProjectsPage);
