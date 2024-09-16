import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import Shoe from "./components/Shoe";
import { OrbitControls } from "@react-three/drei";

const App = () => {
  const [mesh, setMesh] = useState("ffffff");
  const [stripes, setStripes] = useState("ffffff");
  const [sole, setSole] = useState("ffffff");
  return (
    <>
      <div className="bg-primary h-screen flex justify-center items-center text-white">
        <div className="h-[58vh] rounded-[13px] shadow-lg p-[2rem] w-[35vw] bg-secondary">
          <div className="bg-white w-full shadow-xl h-[38vh] rounded-none mb-3">
            <Canvas shadows>
              <Suspense fallback={false}>
                <Shoe
                  customeColors={{
                    mesh: mesh,
                    stripes: stripes,
                    sole: sole,
                  }}
                />
                <ambientLight />
                <spotLight
                  intensity={1}
                  angle={0.1}
                  penumbra={1}
                  position={[10, 15, 10]}
                  castShadow
                />
                <OrbitControls enablePan enableZoom enableRotate />
              </Suspense>
            </Canvas>
          </div>
          <h2 className="font-semibold mb-2">Color chooser</h2>
          <div className="flex flex-row gap-2">
            <div>
              <input
                type="color"
                id="mesh"
                name="mesh"
                value={mesh}
                onChange={(e) => setMesh(e.target.value)}
              />
              <label htmlFor="mesh">Main</label>
            </div>

            <div>
              <input
                type="color"
                id="stripes"
                name="stripes"
                value={stripes}
                onChange={(e) => setStripes(e.target.value)}
              />
              <label htmlFor="stripes">Stripes</label>
            </div>
            <div>
              <input
                type="color"
                id="sole"
                name="sole"
                value={sole}
                onChange={(e) => setSole(e.target.value)}
              />
              <label htmlFor="sole">Sole</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
