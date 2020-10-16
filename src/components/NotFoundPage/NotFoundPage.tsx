import React from "react";
import {Heading} from '@chakra-ui/core';
import {notFoundInfo} from "./NotFoundPage.style";

export const NotFoundPage: React.FC = () => {
    return(<Heading as={'h4'} className={notFoundInfo}>Sorry, page does not exist</Heading>)
};