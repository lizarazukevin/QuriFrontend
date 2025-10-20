import React from "react";

interface BoxProps {
    text: string;
}

export const Box: React.FC<BoxProps> = ({ text }) => {
    return (
        <div data-testid="box">
            {text}
        </div>
    );
};