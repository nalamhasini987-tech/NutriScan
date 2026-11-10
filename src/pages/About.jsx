
import './About.css'

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <span className="about-tag">ABOUT NUTRISCAN</span>

        <h1>
          Making Nutrition Awareness
          <span> Smarter with AI</span>
        </h1>

        <p>
          NutriScan is an AI-powered research project designed to
          explore nutritional deficiency detection through image
          analysis using deep learning and machine learning.
        </p>
      </section>

      <section className="about-section">
        <div className="about-text">
          <span className="section-label">OUR PROJECT</span>
          <h2>Understanding Nutrition Through Technology</h2>

          <p>
            Nutritional deficiencies can affect different parts of
            the human body. NutriScan explores how artificial
            intelligence can analyze images and identify visual
            patterns associated with selected nutritional
            deficiencies.
          </p>

          <p>
            The project combines four deep learning models:
            Vision Transformer (ViT), ResNet50, EfficientNet-B0,
            and DenseNet121. Their extracted features are combined
            and passed to an XGBoost classifier to generate a
            predicted category.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <h2>04</h2>
            <p>Deep Learning Models</p>
          </div>

          <div className="stat-card">
            <h2>06</h2>
            <p>Deficiency Classes</p>
          </div>

          <div className="stat-card">
            <h2>5120</h2>
            <p>Combined Features</p>
          </div>

          <div className="stat-card">
            <h2>AI</h2>
            <p>Technology Driven</p>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <span className="section-label">OUR OBJECTIVE</span>
        <h2>Exploring the Power of Artificial Intelligence</h2>

        <p>
          Our objective is to develop an experimental system that
          demonstrates how computer vision and machine learning
          techniques can support research into nutritional
          deficiency identification.
        </p>
      </section>

      <section className="about-disclaimer">
        <h3>Important Note</h3>
        <p>
          NutriScan is an academic research prototype. Its
          predictions are experimental and must not be considered
          medical diagnoses. Please consult a qualified healthcare
          professional for medical advice.
        </p>
      </section>

    </div>
  )
}

export default About
