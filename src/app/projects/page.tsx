import '../projects/projectPage.css'
import ProjectTiles from './projectcomp/ProjectTiles'

export default function ProjectPage () {
    return (
        <div className="container">
                <div className='project-section'>
                    <h1>[Projects]</h1>
                </div>
                <ProjectTiles />
        </div>
    )
}