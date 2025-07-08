const BlogContent = () => {
  return (
    <section className="blog-container">
      {/* Text Section */}
      <div className="blog-text">
        <h2>Welcome to Hotel Mellow, where comfort meets tranquility.</h2>
        <p>
          Nestled in the heart of a bustling city, our hotel offers a peaceful
          retreat for both business and leisure travelers. With modern amenities,
          and a warm, inviting atmosphere, we strive to make your stay with us.
        </p>
        <button>Read About Us</button>
      </div>

      {/* Images Section */}
      <div className="blog-images">
        <img
          src="https://images.unsplash.com/photo-1657639028182-24e11504c7c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Bedroom"
          className="img-large"
        />
        <img
          src="https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Pool"
          className="img-small"
        />
        <img
          src="https://images.unsplash.com/photo-1640441710596-d0b5e22edaac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Relaxing"
          className="img-small"
        />
      </div>
    </section>
  );
};

export default BlogContent;
