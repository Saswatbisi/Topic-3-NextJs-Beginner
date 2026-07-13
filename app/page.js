// app/page.js
import TaskDashboard from '../components/container/TaskDashboard';
import './page.css';

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1 className="title">Component & Structure Lab</h1>
        <p className="subtitle">
          Observe the separation of concerns. The stateless presentational widgets handle visuals,
          the utility folder parses datatypes, and the container handles state.
        </p>
      </section>
      <TaskDashboard />
    </div>
  );
}
