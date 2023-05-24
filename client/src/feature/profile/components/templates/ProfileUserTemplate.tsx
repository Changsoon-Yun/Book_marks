export default function ProfileUserTemplate() {
  return (
    <>
      <div>
        <div>
          <label htmlFor=''>Profile Image</label>
          <input type='text' placeholder={'Image'} />
        </div>
        <div>
          <label htmlFor=''>Nick Name</label>
          <input type='text' placeholder={'Nick Name'} />
        </div>
        <div>
          <label htmlFor=''>Summary</label>
          <input type='text' placeholder={'Summary'} />
        </div>
        <div>
          <label htmlFor=''>MBTI</label>
          <input type='text' placeholder={'MBTI'} />
        </div>
        <div>
          <label htmlFor=''>Job</label>
          <input type='text' placeholder={'Job'} />
        </div>
      </div>
    </>
  );
}
