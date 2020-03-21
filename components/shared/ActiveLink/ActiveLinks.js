import React, { Children } from 'react';
import PropsType from 'prop-types';
import Link from "next/link";
import { useRouter } from 'next/router';

const ActiveLink = ({ children, activeClass, ...props }) => {
    const { pathname } = useRouter();
    const child = Children.only(children);
    const childClass = child.props.className || '';

    const className =

        pathname === props.href ? `${childClass} ${activeClass}`.trim() :
            childClass;
    return (
        <Link {...props}>
            {React.cloneElement(child, {
                className: className || null
            })}
        </Link>
    );
};


export default ActiveLink;
