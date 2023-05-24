import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "../components/HeaderItem";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      {/* <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      /> */}
      <img 
      className="object-contain"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXEAAACICAMAAAAmsyvzAAAAh1BMVEUAAAAc54Md7IYd7oca1XkUolwc5oIZynMXvmwTl1YJRCcYx3AQgEka2XsWuGgDFg0PeEQEIhMVq2EDEwsWs2YLVjENajwb4H8Oc0ERj1ESllUGMh0KUi8Tn1oPe0Yd8okIPSIQh0wJSioNbT4MZDkEHRABDAYHNx8FKhgIPyMDGQ4LXDQFJha9DFo/AAAEzElEQVR4nO2d23baOhRFbckYSDAFSmLu4ZLTNKH//33HTTpakJYq2bowRrNm39rNljQNwpWlTZYRQgghhBBCCCGEEEIIIYQQQgghUVjNdLa37tQFa9C/2fLWvfKhL4WKrG7dqQvutO41HRzculc+9HOd4taduuCu1PsnaDwiNJ4aGk8NjaeGxlND46mh8dTQeGpoPDU0nhoaTw2Np4bGU0PjqaHx1NB4amg8NTSeGhpPDY2nhsZTQ+OpofHU0HhqPo/x9eZ5MblkcXre7P+z5hsNdQ7fcOwCxK6UWCfjmy3IdIcbfUGxD9ZxhQMaX4wrIRF1MV4e/54P7ar7imPHT3ps/nYd42R8pycSTyfc6BnFjtxkBQEZz4VAf/vxT/KpWO3N+e7BSwuD8TmILb9cxzgZn0g9SD7iRh9Q7M2NW5D1fG/KR+M2uhhvxlyaNhTTuI1uxptR33+H+WjcRlfjuSj2KB+N2+hsPBfVGuSjcRvdjTcTC8hH4zY8jOdypeejcRs+xnP5ouWjcRtexsVcy0fjNryM5+Wrmo/GbfgZF9pMTuM2/IzrC7s0bsPTeK6uidK4DU/jYqLko3EbvsbVM/w0bsNs/GrN3hik3h/SuA2DcfFUjC/pS9DRn3F9JR+N28DGRe+LGriEgXmhPJekcRv4qdsBRD6CsTc2FUM0bgMZF2MYukITSzW9DqJxG8i43MDQdU3jAUDGyxaxNN6WNnuyxsAQjbeFxmn8OobGadwXGqfx6xgap3FfaJzGr2NonMZ9ofF/0Xg9xfkGUY2rT2B/8fgZjAu8FvkNrUUGMy5meBA90MF/zzge/Aitt9dKkJPxBcyEjxSASOPnIQqhjaOZIpcLkG2Pxt7N+DNqFJ/6RGPIpeFcXBRCG4cjyuXyTU22QHNKR+MPMJXsa7si9/ANkYtzC2O+hDa+xRstRDXfXjLrG+LUUwBOxl/x1RP5YDv80+awNyhxq3IfRqYToY3v8C4LZfuLcQOMNuU7GZ9Wbo2aWi21T2BEQhs/mw/fuiDVXQRu5/LR93ULkhYiCG0c3vK5I9Uz6G7G0S2fO+DgQURCG8c3K86oX5yOxk9ejcpdCJOuBDdunMhd0HfKuBl/8/pkyR8hTLoS3PjUa+zajbFjfZWZx5s8cbmW4Mbh+pQr2qTiavzo8ckS6P9n8Qhv/KW7cbDf0bWGkMfXh7pZNTLhjWe9zu83kMzV+LGz8aTLWFkU49Oq4+jRPYNznaxhx+ucvOhWBOPZuePY0ZZe98pkhnUDK3+vQhWeGMbxOqwNUaG6Z+7G150+WmnvxX8SxXh2aK9c1Poh/6xV9b3vdXvlMv2Pq8Yxnp0Mq3RGRKUtrb7Tpt7h9L71hb7Br9lGMp4d241eDlB5nKxthcltqwst6rR34h/EMt5M5pWzc1mjg0fvtKzpeRxLV+dCzuE8Fpt4xhvnhXAYv5D11rw+3bqK6maeuzQqxCBlIc8L2vyy9UCPFaadER/sD+M6lxK87r2h5k9ZzQwbSz7o8MvWXx9nRSnMrTYXpB4cDLNYfJY9HVCM6Z0RiB1aH5+8nnbL4Ra8tLccTZ7xA/c/rNELjXPQb36cJ4cVbHR42J0MJW0JIYQQQgghhBBCCCGEEEIIIYQQQgghhJBPwv+fL3U/IT287gAAAABJRU5ErkJggg=="
      width={200}
      height={100} />
    </header>
  );
}

export default Header;
