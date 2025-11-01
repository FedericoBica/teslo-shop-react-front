export const CustomFullScreenLoading = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
        <div className='flex flex-col items-center gap-4'>
            <div className='h-10 q-10 animate-spin rounded-full border-4'/>
            <p className='text-lg font-medium'>Espere un momento...</p>
        </div>
    </div>
  )
}
