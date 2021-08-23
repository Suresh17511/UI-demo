import React from "react";

const BottomContainer = () => {
  return (
    <div className="bottom__container">
      <div className="table_container">
        <div className="header">
          <span>Sales Breakdown</span>
        </div>
        <div className="table__container">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Spent</th>
                <th>Return</th>
                <th>Cost Conversion</th>
                <th>Cost Click</th>
                <th>CTH</th>
                <th>Actions</th>
              </tr>
              <tr>
                <td>General Test 1</td>
                <td>
                  <div className="color"></div>Paused
                </td>
                <td>$150</td>
                <td>$4.1k</td>
                <td>$12.54</td>
                <td>$0.29</td>
                <td>3.5%</td>
                <td className="toggle">
                  <img
                    src="https://cdn.dribbble.com/users/306638/screenshots/2831247/toggle_still.gif?compress=1&resize=400x300"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>General Test 1</td>
                <td>
                  <div className="color"></div>Paused
                </td>
                <td>$150</td>
                <td>$4.1k</td>
                <td>$12.54</td>
                <td>$0.29</td>
                <td>3.5%</td>
                <td className="toggle">
                  <img
                    src="https://cdn.dribbble.com/users/306638/screenshots/2831247/toggle_still.gif?compress=1&resize=400x300"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>General Test 1</td>
                <td>
                  <div className="color" style={{ background: "red" }}></div>
                  Removed
                </td>
                <td>$150</td>
                <td>$4.1k</td>
                <td>$12.54</td>
                <td>$0.29</td>
                <td>3.5%</td>
                <td className="toggle">
                  <img
                    src="https://cdn.dribbble.com/users/306638/screenshots/2831247/toggle_still.gif?compress=1&resize=400x300"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>General Test 1</td>
                <td>
                  <div className="color"></div>Paused
                </td>
                <td>$150</td>
                <td>$4.1k</td>
                <td>$12.54</td>
                <td>$0.29</td>
                <td>3.5%</td>
                <td className="toggle">
                  <img
                    src="https://cdn.dribbble.com/users/306638/screenshots/2831247/toggle_still.gif?compress=1&resize=400x300"
                    alt=""
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BottomContainer;
