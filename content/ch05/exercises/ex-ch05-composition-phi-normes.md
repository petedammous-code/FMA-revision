---
id: ex-ch05-composition-phi-normes
type: exercise
chapters: [5]
title: Composer par une fonction réelle, la différentiabilité dépend des normes
source: "Inventé (dans l'esprit de PC ex. 3, opérateur de composition sur $C^0([0,1])$)"
difficulty: 2
time: 30
tools: [ch05-differentielle-def, ch05-classe-ck-def, ch05-differentiable-implique-continue, ch05-differentielle-normes-equivalentes, ch05-composition-differentielles, ch05-differentielle-lineaire, ch05-derivee-directionnelle-unicite]
---
## Énoncé

Soit $E=C^0([0,1],\R)$, que l'on munit selon les questions de l'une des deux normes
$$
\|u\|_\infty=\sup_{t\in[0,1]}|u(t)|,\qquad \|u\|_1=\int_0^1|u(t)|\,dt .
$$
Pour $\phi\in C^1(\R,\R)$, on définit $F_\phi:E\to E$ par $F_\phi(u)=\phi\circ u$.

1. Montrer que $F_\phi:(E,\|\cdot\|_\infty)\to(E,\|\cdot\|_\infty)$ est différentiable en tout $u\in E$, avec $d(F_\phi)_u(h)=(\phi'\circ u)\,h$ (produit de fonctions).
2. Montrer que $F_\phi:(E,\|\cdot\|_\infty)\to(E,\|\cdot\|_\infty)$ est de classe $C^1$.
3. On prend $\phi(s)=s^2$. Montrer que $F_\phi:(E,\|\cdot\|_1)\to(E,\|\cdot\|_1)$ n'est pas continue en $0$. Est-elle différentiable en $0$ ?
4. Montrer que pour tout $\phi\in C^1(\R,\R)$, $F_\phi:(E,\|\cdot\|_\infty)\to(E,\|\cdot\|_1)$ est différentiable. Pourquoi les questions 3 et 4 ne contredisent-elles pas le fait que « la différentiabilité ne dépend pas du choix de normes équivalentes » ?
5. On prend $\phi=\sin$. Montrer que $F_\phi:(E,\|\cdot\|_1)\to(E,\|\cdot\|_1)$ est continue (et même $1$-lipschitzienne), mais n'est pas différentiable en $0$.

## Indices

### Indice 1
Pour 1, écrire le reste point par point : $\phi(u(t)+h(t))-\phi(u(t))-\phi'(u(t))h(t)$, et le contrôler **uniformément en $t$**. Quelle propriété de $\phi'$ sur un segment donne de l'uniformité ?

### Indice 2
$u$ est bornée par $M=\|u\|_\infty$ ; $\phi'$ est uniformément continue sur le compact $[-M-1,M+1]$ (Heine). Le reste s'écrit $\Big(\int_0^1\big[\phi'(u(t)+sh(t))-\phi'(u(t))\big]ds\Big)h(t)$.

### Indice 3
Pour 3 et 5, chercher des fonctions « pics » : petites en norme $\|\cdot\|_1$ (support très étroit) mais hautes. Pour 3, $u_n(t)=n^2\max(0,1-n^3t)$. Pour 5, si $F_{\sin}$ était différentiable en $0$, sa différentielle serait donnée par les dérivées directionnelles : la calculer, puis tester le reste sur $h_n(t)=\pi\max(0,1-nt)$.

### Indice 4
Pour 4, $J:(E,\|\cdot\|_\infty)\to(E,\|\cdot\|_1)$, $J(v)=v$, est linéaire continue ; règle de la chaîne pour $J\circ F_\phi$.

## Corrigé

**1.** Fixons $u\in E$ et posons $M=\|u\|_\infty$, $K=[-M-1,M+1]$.

*Candidat.* $L(h)=(\phi'\circ u)h$ est linéaire en $h$, et à valeurs dans $E$ (produit de fonctions continues). Elle est continue : $\|L(h)\|_\infty\le\|\phi'\circ u\|_\infty\,\|h\|_\infty$, où $\|\phi'\circ u\|_\infty<\infty$ car $\phi'\circ u$ est continue sur le compact $[0,1]$.

*Reste.* Soit $h\in E$ avec $\|h\|_\infty\le1$, et $t\in[0,1]$. La fonction $s\mapsto\phi(u(t)+sh(t))$ est $C^1$ sur $[0,1]$, de dérivée $\phi'(u(t)+sh(t))h(t)$, donc
$$
r_h(t):=\phi(u(t)+h(t))-\phi(u(t))-\phi'(u(t))h(t)=h(t)\int_0^1\big[\phi'(u(t)+sh(t))-\phi'(u(t))\big]\,ds .
$$
Les points $u(t)$ et $u(t)+sh(t)$ sont dans $K$ et distants d'au plus $\|h\|_\infty$. Comme $\phi'$ est continue sur le compact $K$, elle y est uniformément continue (Heine) : pour $\eps>0$ il existe $\delta\in]0,1]$ tel que $a,b\in K$, $|a-b|\le\delta$ entraîne $|\phi'(a)-\phi'(b)|\le\eps$. Si $\|h\|_\infty\le\delta$, on obtient $|r_h(t)|\le\eps|h(t)|\le\eps\|h\|_\infty$ pour tout $t$, d'où $\|r_h\|_\infty\le\eps\|h\|_\infty$. C'est exactement $\|F_\phi(u+h)-F_\phi(u)-L(h)\|_\infty=o(h)$ : par [[ch05-differentielle-def]], $F_\phi$ est différentiable en $u$ et $d(F_\phi)_u=L$.

**2.** Pour $u,v\in E$ et $h\in E$, $\|(d(F_\phi)_u-d(F_\phi)_v)(h)\|_\infty=\|(\phi'\circ u-\phi'\circ v)h\|_\infty\le\|\phi'\circ u-\phi'\circ v\|_\infty\|h\|_\infty$, donc
$$
\|d(F_\phi)_u-d(F_\phi)_v\|_{\mathcal L(E;E)}\le\|\phi'\circ u-\phi'\circ v\|_\infty .
$$
Fixons $u$, $M$, $K$ comme en 1 et $\eps>0$, $\delta\in]0,1]$ donné par l'uniforme continuité de $\phi'$ sur $K$. Si $\|v-u\|_\infty\le\delta$, alors pour tout $t$, $u(t),v(t)\in K$ et $|u(t)-v(t)|\le\delta$, donc $|\phi'(u(t))-\phi'(v(t))|\le\eps$ : $\|d(F_\phi)_u-d(F_\phi)_v\|\le\eps$. Ainsi $u\mapsto d(F_\phi)_u$ est continue : $F_\phi$ est $C^1$ ([[ch05-classe-ck-def]]).

**3.** Ici $F_\phi(u)=u^2$ et $F_\phi(0)=0$. Soit $u_n(t)=n^2\max(0,1-n^3t)$ : fonction continue, nulle sur $[n^{-3},1]$, affine de $n^2$ à $0$ sur $[0,n^{-3}]$. Alors
$$
\|u_n\|_1=\int_0^{n^{-3}}n^2(1-n^3t)\,dt=\frac{n^2}{2n^3}=\frac1{2n}\longrightarrow0,\qquad
\|u_n^2\|_1=\int_0^{n^{-3}}n^4(1-n^3t)^2\,dt=\frac{n^4}{3n^3}=\frac n3\longrightarrow+\infty .
$$
Donc $u_n\to0$ mais $F_\phi(u_n)\not\to F_\phi(0)$ pour $\|\cdot\|_1$ : $F_\phi$ n'est pas continue en $0$. Comme une application différentiable en un point y est continue ([[ch05-differentiable-implique-continue]]), $F_\phi$ **n'est pas différentiable** en $0$ pour ces normes.

**4.** $J:(E,\|\cdot\|_\infty)\to(E,\|\cdot\|_1)$, $J(v)=v$, est linéaire et continue car $\|v\|_1\le\|v\|_\infty$ ; elle est donc différentiable avec $dJ_v=J$ ([[ch05-differentielle-lineaire]]). L'application étudiée est $J\circ F_\phi$, où $F_\phi$ est différentiable pour $\|\cdot\|_\infty$ au départ et à l'arrivée (question 1). Par la règle de la chaîne ([[ch05-composition-differentielles]]), $J\circ F_\phi$ est différentiable en tout $u$, de différentielle $J\circ d(F_\phi)_u:h\mapsto(\phi'\circ u)h$.

Pas de contradiction avec [[ch05-differentielle-normes-equivalentes]] : ce résultat concerne des normes **équivalentes**, or $\|\cdot\|_1$ et $\|\cdot\|_\infty$ ne le sont pas sur $E$ : pour $v_n(t)=t^n$, $\|v_n\|_\infty=1$ et $\|v_n\|_1=\frac1{n+1}$, donc il n'existe aucune constante $C$ avec $\|v\|_\infty\le C\|v\|_1$. Ce que montrent 3 et 4 : affaiblir la norme **à l'arrivée** préserve la différentiabilité (le reste devient plus petit), affaiblir la norme **au départ** peut la détruire (les « petits » accroissements $h$ sont plus nombreux).

**5.** *Continuité.* $\sin$ est $1$-lipschitzienne sur $\R$ (inégalité des accroissements finis, $|\cos|\le1$), donc $\|\sin\circ u-\sin\circ v\|_1=\int_0^1|\sin u(t)-\sin v(t)|\,dt\le\|u-v\|_1$.

*Seule différentielle possible.* Si $F_{\sin}$ était différentiable en $0$, on aurait pour tout $h\in E$, d'après [[ch05-derivee-directionnelle-unicite]], $d(F_{\sin})_0(h)=\lim_{t\to0}\frac{\sin(th)}{t}$ (limite dans $(E,\|\cdot\|_1)$). Or $|\sin x-x|\le|x|^3/6$ pour tout réel $x$, d'où
$$
\Big\|\frac{\sin(th)}{t}-h\Big\|_1\le\frac{t^2}{6}\int_0^1|h|^3\longrightarrow0\qquad(t\to0).
$$
Donc on aurait $d(F_{\sin})_0=\id_E$, et il faudrait $\|\sin\circ h-h\|_1=o(\|h\|_1)$.

*Ce n'est pas le cas.* Soit $h_n(t)=\pi\max(0,1-nt)$ (continue, nulle sur $[1/n,1]$). Avec le changement de variable $s=1-nt$ :
$$
\|h_n\|_1=\frac\pi n\int_0^1s\,ds=\frac{\pi}{2n},\qquad
\|\sin\circ h_n-h_n\|_1=\frac1n\int_0^1(\pi s-\sin\pi s)\,ds=\frac1n\Big(\frac\pi2-\frac2\pi\Big)
$$
(on a utilisé $\sin x\le x$ pour $x\ge0$ pour enlever la valeur absolue). Le rapport vaut $\dfrac{\pi/2-2/\pi}{\pi/2}=1-\dfrac4{\pi^2}\approx0{,}595$ pour tout $n$, alors que $\|h_n\|_1\to0$ : le reste n'est pas $o(h)$. Donc $F_{\sin}$ n'est pas différentiable en $0$ pour $\|\cdot\|_1$ (alors qu'elle l'est, et est même $C^1$, pour $\|\cdot\|_\infty$ d'après 2).

## Pièges et variantes

* > ⚠️ Dans la question 1, une majoration **point par point** du reste ne suffit pas : il faut qu'elle soit uniforme en $t$. C'est l'uniforme continuité de $\phi'$ sur un compact **fixe** $K$ (qui contient toutes les valeurs de $u$ et de $u+sh$ dès que $\|h\|_\infty\le1$) qui la fournit. Penser à borner $\|h\|_\infty$ par $1$ avant de choisir $K$.
* « La différentiabilité ne dépend pas des normes » n'est vrai qu'en dimension finie, ou pour des normes **équivalentes**. En dimension infinie, changer de norme change la notion de « petit accroissement » : ici, une fonction petite en moyenne peut être grande en certains points.
* Une application peut être lipschitzienne (donc continue) sans être différentiable : question 5. Le candidat pour la différentielle se trouve toujours par les dérivées directionnelles, puis on teste le reste sur une suite bien choisie.
* Variante : à l'arrivée $\|\cdot\|_1$ et au départ $\|\cdot\|_\infty$, on peut prendre $\phi$ seulement $C^1$ ; si l'on veut $F_\phi$ de classe $C^2$ pour $\|\cdot\|_\infty$, il suffit que $\phi$ soit $C^2$, et alors $d^2(F_\phi)_u(h,k)=(\phi''\circ u)\,hk$.
* Variante : on peut montrer que $F_\phi:(E,\|\cdot\|_1)\to(E,\|\cdot\|_1)$ n'est différentiable en un point que si $\phi$ est affine (même argument de pics, centrés en un point $t_0$ quelconque : le rapport reste/accroissement tend vers une moyenne de $|\phi(a+cs)-\phi(a)-\phi'(a)cs|/|c|$ avec $a=u(t_0)$).
