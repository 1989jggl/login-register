import { useDashboard } from '../hooks/useDashboard'

export const Dashboard = () => {
  const { handleLogout, user } = useDashboard()

  return (
    <>
      {user && (
        <div className="flex flex-grow flex-col min-h-full relative justify-center items-center mt-10 md:mt-0">
          <div className="flex flex-1 flex-col justify-center text-center">
              <span>{user.nomuser}</span>
              <span>{user.corelec}</span>
              <span>{user.type}</span>
              <button
              className="bg-[#569B51] h-auto w-full py-4 rounded-xl hover:-translate-y-1 hover:scale-110 hover:bg-[#569B51] duration-300 mt-12"
              type="button"
              onClick={() => handleLogout()}
            >
              <span className="text-white font-medium text-base leading-5">
                Salir
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
