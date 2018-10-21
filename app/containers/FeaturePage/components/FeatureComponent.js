import React from 'react';

const FeatureComponent = () => (
  <ul>
    <li>
      <p className="title">Next generation JavaScript 11</p>
      <p>
        Use template strings, object destructuring, arrow functions, JSX syntax
        and more, today.
      </p>
    </li>
    <li>
      <p className="title">Instant feedback</p>
      <p>
        Enjoy the best DX and code your app at the speed of thought! Your saved
        changes to the CSS and JS are reflected instantaneously without
        refreshing the page. Preserve application state even when you update
        something in the underlying code!
      </p>
    </li>
    <li>
      <p className="title">Industry-standard routing</p>
      <p>
        {
          "Write composable CSS that's co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance."
        }
      </p>
    </li>
    <li>
      <p className="title">The Best Test Setup</p>
      <p>
        Automatically guarantee code quality and non-breaking changes. (Seen a
        react app with 99% test coverage before?)
      </p>
    </li>
  </ul>
);

export default FeatureComponent;
