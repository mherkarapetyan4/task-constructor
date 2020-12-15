import React, { Suspense } from "react";
import { Loader } from "components/Loader";
import PropTypes from "prop-types";

function LazyComponent({ component, data, children }) {
    const Component = component;
    return (
        <Suspense fallback={<Loader />}>
            {children ? children : <Component {...data} />}
        </Suspense>
    );
}

LazyComponent.propTypes = {
    component: PropTypes.any,
    data: PropTypes.object,
    children: PropTypes.any,
};

LazyComponent.defaultProps = {
    data: {},
};

export { LazyComponent };
