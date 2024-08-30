import { Outlet } from "react-router-dom"

export const Layaouts = () => {
  return (
    <>
        <header className=" bg-slate-800">
            <div className="mx-auto max-w-6xl py-10">
                <h1 className="text-4xl font-extrabold text-white text-center">
                    Administrador de Productos
                </h1>
            </div>
        </header>

        <main className=" mt-10 mx-auto max-w-6xl p-10 bg-white rounded-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">

            <Outlet />

        </main>

    </>
  )
}
