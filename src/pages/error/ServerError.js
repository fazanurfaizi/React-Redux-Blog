import React from "react";

const ServerError = () => {
  return (
    <>
      <section className="page-banner-section text-center">
			<div className="container">
				<h1>Unexpected Error</h1>
			</div>
        </section>
        		
		<section className="error-section">
			<div className="container">
				<div className="error-box">
					<h1>500</h1>
                    <p>Sorry, it's me, not you.</p>
                    <p>&#58;&#40;</p>
                    <p>
                        <a href="/">Let me try again!</a>
                    </p>
				</div>
			</div>
		</section>
    </>
  );
};

export default ServerError;
