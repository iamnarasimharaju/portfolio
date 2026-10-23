export default function Research() {
  return (
    <section className="section research-section">
      <div className="section-container">
        <span className="section-eyebrow">RESEARCH & PUBLICATION</span>

        <h1 className="section-title">Research</h1>

        <p className="section-description">
          Exploring technical challenges through experimentation,
          implementation, and evaluation.
        </p>

        <article className="research-card">
          <div className="research-card-top">
            <span className="research-badge">CONFERENCE PAPER</span>
            <span className="research-year">2025</span>
          </div>

          <h2>
            Improved LiDAR Based Object Detection in Challenging Scenarios
          </h2>

          <p className="research-venue">
            IEEE · ICVTTS 2025 · Christ University, Bengaluru
          </p>

          <p className="research-description">
            Investigated 3D object detection in challenging scenarios using
            the KITTI dataset, focusing on occlusion and sparse-point
            conditions. The project involved benchmarking object detection
            models and developing a 3D visualization pipeline with Open3D.
          </p>

          <div className="research-stack">
            {["Python", "TensorFlow", "Keras", "Open3D", "KITTI Dataset"].map(
              (technology) => (
                <span className="research-tag" key={technology}>
                  {technology}
                </span>
              )
            )}
          </div>

          <a
            href="https://ieeexplore.ieee.org/document/11296518"
            className="button button-primary research-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Research Paper <span aria-hidden="true">↗</span>
          </a>
        </article>
      </div>
    </section>
  );
}