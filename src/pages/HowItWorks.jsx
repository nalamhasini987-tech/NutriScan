
import './HowItWorks.css'

function HowItWorks() {
  const models = [
    {
      number: '01',
      name: 'Vision Transformer (ViT)',
      description:
        'Analyzes image information using attention mechanisms to understand important visual patterns.'
    },
    {
      number: '02',
      name: 'ResNet50',
      description:
        'Uses residual connections to learn meaningful visual features from input images.'
    },
    {
      number: '03',
      name: 'EfficientNet-B0',
      description:
        'Extracts image features using an efficient convolutional neural network architecture.'
    },
    {
      number: '04',
      name: 'DenseNet121',
      description:
        'Uses dense connections between layers to reuse information and extract image features.'
    }
  ]

  const classes = [
    'B12',
    'B Complex',
    'Iron',
    'Vitamin A',
    'Vitamin C',
    'Zinc'
  ]

  return (
    <div className="how-page">

      <section className="how-hero">
        <span className="how-tag">OUR TECHNOLOGY</span>

        <h1>
          How Does <span>NutriScan Work?</span>
        </h1>

        <p>
          Discover how deep learning and machine learning work
          together to analyze an uploaded image and generate
          an experimental nutritional deficiency prediction.
        </p>
      </section>

      <section className="pipeline-section">
        <div className="how-heading">
          <span className="section-label">WORKFLOW</span>
          <h2>Our AI Detection Process</h2>
          <p>From image upload to the final model prediction.</p>
        </div>

        <div className="pipeline-list">

          <div className="pipeline-card">
            <span className="pipeline-number">01</span>
            <div>
              <h3>Image Upload</h3>
              <p>
                The user uploads an image through the NutriScan
                detection interface. The image is prepared for
                processing by the trained models.
              </p>
            </div>
          </div>

          <div className="pipeline-card">
            <span className="pipeline-number">02</span>
            <div>
              <h3>Feature Extraction</h3>
              <p>
                Four trained deep learning models independently
                extract important visual features from the image.
              </p>
            </div>
          </div>

          <div className="pipeline-card">
            <span className="pipeline-number">03</span>
            <div>
              <h3>Feature Concatenation</h3>
              <p>
                The extracted features are combined into a single
                feature vector containing 5120 features.
              </p>
            </div>
          </div>

          <div className="pipeline-card">
            <span className="pipeline-number">04</span>
            <div>
              <h3>XGBoost Classification</h3>
              <p>
                The combined feature vector is passed to the
                trained XGBoost classifier to predict one of
                the six nutritional deficiency classes.
              </p>
            </div>
          </div>

          <div className="pipeline-card">
            <span className="pipeline-number">05</span>
            <div>
              <h3>Prediction Result</h3>
              <p>
                The predicted class is displayed on the screen
                along with the experimental model score.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="models-section">
        <div className="how-heading">
          <span className="section-label">DEEP LEARNING</span>
          <h2>Four Powerful Feature Extractors</h2>
          <p>Each model contributes a different feature representation.</p>
        </div>

        <div className="models-grid">
          {models.map((model) => (
            <div className="model-card" key={model.number}>
              <span>{model.number}</span>
              <h3>{model.name}</h3>
              <p>{model.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="classes-section">
        <div className="how-heading">
          <span className="section-label">CLASSIFICATION</span>
          <h2>Six Prediction Classes</h2>
          <p>The trained classifier predicts one of these categories.</p>
        </div>

        <div className="classes-grid">
          {classes.map((item) => (
            <div className="class-item" key={item}>
              <span>✓</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="how-note">
        <h3>Research Disclaimer</h3>
        <p>
          NutriScan is an experimental academic project.
          Its predictions are not medical diagnoses and should
          not replace professional medical evaluation.
        </p>
      </section>

    </div>
  )
}

export default HowItWorks
