import BaseLayout from "../BaseLayout";
import { Outlet } from "react-router-dom";
import './index.css';

const PageLayout = () => {
  return (
    <BaseLayout>
      <div>
        <Outlet />
      </div>
    </BaseLayout>
  );
};

export default PageLayout;
