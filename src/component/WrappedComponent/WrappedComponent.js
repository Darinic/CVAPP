import React, {useEffect, useRef} from "react";

const WrappedComponent = ({id, component}) => {

    const observer = useRef(
        new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting >= 0.8) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
          });
        })
      );
    
      useEffect(() => {
        const sectionElements = document.querySelectorAll('.section');
        sectionElements.forEach(sectionElement => {
          observer.current.observe(sectionElement);
        });
      }, []);

    return (
        <section className="section" id={id}>
            {component}
        </section>
    );
};

export default WrappedComponent;