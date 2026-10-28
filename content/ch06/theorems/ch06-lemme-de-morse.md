---
id: ch06-lemme-de-morse
type: theorem
chapter: 6
title: Lemme de Morse
ref: Exercice VI.3.4
page: 120
importance: 3
depends: [ch06-inversion-locale, ch05-taylor-reste-integral, ch05-lemme-schwarz, ch05-differentielle-bilineaire, ch05-composition-differentielles, ch05-restriction-sous-espace, ch06-point-critique-non-degenere-def]
tags: [Morse, point critique, hessienne, signature, forme quadratique, changement de variables, inversion locale]
---
## Intuition

> 💡 Près d'un minimum « bien rond », le graphe d'une fonction ressemble à une cuvette $x^2+y^2$ ; près d'un col, à une selle $x^2-y^2$. Le lemme de Morse dit que ce n'est pas seulement une ressemblance à l'ordre $2$ : après un changement de coordonnées lisse, la fonction **est exactement** la forme quadratique donnée par sa hessienne, sans aucun reste.

Image : les lignes de niveau de $f$ près d'un col sont des courbes déformées ; le difféomorphisme $\psi$ les redresse en hyperboles exactes $h_1^2-h_2^2=c$. Seul compte le nombre de directions « montantes » et « descendantes ».

Vocabulaire (voir [[ch06-point-critique-non-degenere-def]]) : $a$ est **point critique** si $df_a=0$ ; il est **non dégénéré** si la forme bilinéaire symétrique $d^2f_a$ (de matrice la hessienne) est inversible ; sa **signature** $(r,s)$ compte les carrés positifs et négatifs. L'outil central est le théorème d'inversion locale ([[ch06-inversion-locale]]), utilisé **deux fois**.

## Énoncé

**Théorème (poly, Exercice VI.3.4 : Lemme de Morse, p. 120).** Soit $U$ un ouvert de $\R^m$ et soit $f:U\to\R$ une fonction de classe $C^\infty$. Soit $a\in U$ un point critique de $f$, c'est-à-dire tel que $df_a=0$. On suppose que la forme bilinéaire symétrique $d^2f_a$ est non dégénérée, de signature $(r,s)$, avec $r+s=m$.

On note $\mathrm M_m(\R)$ l'espace des matrices carrées réelles de taille $m$, $\Sym_m$ et $\mathrm{ASym}_m$ les sous-espaces des matrices symétriques et antisymétriques, et l'on pose $I_{r,s}=\begin{pmatrix}I_r&0\\0&-I_s\end{pmatrix}\in\Sym_m$. On identifie $\R^m$ à l'espace des matrices colonnes, de sorte qu'une forme bilinéaire symétrique de matrice $S$ dans la base canonique s'écrit $(h,k)\mapsto{}^th\,S\,k$.

Alors il existe un voisinage ouvert $W$ de $0$ dans $\R^m$ et un $C^\infty$-difféomorphisme $\psi$ de $W$ sur un voisinage ouvert de $a$ dans $U$, vérifiant $\psi(0)=a$, tel que
$$
f\big(\psi(h)\big)=f(a)+\sum_{i=1}^r h_i^2-\sum_{i=r+1}^m h_i^2,\qquad h=(h_1,\dots,h_m)\in W .
$$

## Hypothèses

### H1 — $f$ de classe $C^\infty$

**Rôle.** La matrice $B(x)$ de la question 2 s'exprime avec la hessienne de $f$ : elle est $C^\infty$ parce que $f$ l'est, et donc $\varphi$ et $\psi=\varphi^{-1}$ aussi.

**Si on la retire.** Hypothèse de confort pour la régularité de $\psi$ : si $f$ est seulement $C^k$ avec $k\ge3$, la même preuve marche et donne $B$, puis $\varphi$ et $\psi$, de classe $C^{k-2}$ (il faut $k-2\ge1$ pour appliquer l'inversion locale à $\varphi$). Pour $f$ seulement $C^2$, cette preuve ne donne qu'un $\varphi$ continu et ne s'applique plus ; on ne traite pas ce cas ici.

### H2 — $a$ est un point critique : $df_a=0$

**Rôle.** Sans terme linéaire, Taylor écrit $f(x)-f(a)$ comme une forme quadratique **à coefficients variables** ${}^tx\,B(x)\,x$.

**Si on la retire.** La conclusion est alors **impossible** : si $f\circ\psi=f(a)+Q$ avec $Q(h)=\sum_{i\le r}h_i^2-\sum_{i\gt r}h_i^2$, alors $d(f\circ\psi)_0=dQ_0=0$, donc $df_a\circ d\psi_0=0$ et, $d\psi_0$ étant inversible, $df_a=0$. Exemple : $f(x,y)=x$ en $(0,0)$ n'est conjuguée à aucune forme quadratique (près d'un point régulier, $f$ est localement une coordonnée, cf. [[ch06-theoreme-rang-constant]]).

### H3 — $d^2f_a$ non dégénérée

**Rôle.** Elle permet de normaliser la hessienne en $2I_{r,s}$ (question 1), c'est-à-dire $B(0)=I_{r,s}$, point où l'on applique l'inversion locale à $g(C)={}^tC\,I_{r,s}\,C$.

**Si on la retire.** $f(x,y)=x^2+y^3$ en $(0,0)$ (point critique, hessienne $\mathrm{diag}(2,0)$ de rang $1$). S'il existait $\psi$ avec $f\circ\psi=Q$, $Q$ forme quadratique non dégénérée en dimension $2$, alors, comme $df_0=0$, la formule $d^2(f\circ\psi)_0(h,k)=d^2f_0(d\psi_0h,d\psi_0k)$ montrerait que la hessienne de $Q$ (de rang $2$) est congruente à celle de $f$ (de rang $1$) : impossible. Même phénomène pour $x^4$ en dimension $1$. Et la hessienne dégénérée ne détermine même pas l'allure : $x^2+y^4$ (minimum strict) et $x^2-y^4$ (col) ont la même.

### H4 — dimension finie

**Rôle.** On utilise la loi d'inertie de Sylvester, les matrices, et le fait que $\mathrm M_m(\R)$ et $\Sym_m$ sont de dimension finie (donc de Banach).

**Si on la retire.** Hors programme : il existe des versions en espace de Hilbert (lemme de Morse–Palais), avec une notion adaptée de non-dégénérescence ; l'énoncé du poly est en dimension finie.

## Idée de la preuve

On normalise ($a=0$, $f(0)=0$, hessienne $2I_{r,s}$), puis Taylor avec reste intégral donne $f(x)={}^tx\,B(x)\,x$ avec $B(0)=I_{r,s}$. L'inversion locale fournit une « racine carrée » lisse $\eta$ telle que $B={}^t\eta(B)\,I_{r,s}\,\eta(B)$ ; le changement de variables $\varphi(x)=\eta(B(x))x$, tangent à l'identité, s'inverse par inversion locale.

## Preuve

**Question 1 : réduction.** Soit $H=\mathrm{Hess}_af$ la matrice de $d^2f_a$, symétrique ([[ch05-lemme-schwarz]]) inversible de signature $(r,s)$. Par la loi d'inertie de Sylvester, il existe $P_0\in\GL(m,\R)$ avec ${}^tP_0HP_0=I_{r,s}$ ; avec $P=\sqrt2\,P_0$ on a ${}^tPHP=2I_{r,s}$. Posons, sur l'ouvert $\tilde U=P^{-1}(U-a)$ qui contient $0$,
$$
\tilde f(x)=f(a+Px)-f(a).
$$
Alors $\tilde f$ est $C^\infty$, $\tilde f(0)=0$, $d\tilde f_0=df_a\circ P=0$ et $d^2\tilde f_0(h,k)=d^2f_a(Ph,Pk)={}^th\,({}^tPHP)\,k$ ([[ch05-composition-differentielles]], $x\mapsto a+Px$ étant affine) : la hessienne de $\tilde f$ en $0$ est $2I_{r,s}$. Si $\tilde\psi:W\to\tilde\psi(W)$ convient pour $\tilde f$, alors $\psi(h)=a+P\tilde\psi(h)$ est un $C^\infty$-difféomorphisme de $W$ sur l'ouvert $a+P\tilde\psi(W)\ni a$, avec $\psi(0)=a$ et $f(\psi(h))=f(a)+\tilde f(\tilde\psi(h))$, ce qui est la conclusion pour $f$. **On suppose désormais $a=0$, $f(0)=0$, $\mathrm{Hess}_0f=2I_{r,s}$**, et on fixe une boule ouverte $U_0\subset U$ centrée en $0$.

**Question 2 : $f(x)={}^tx\,B(x)\,x$.** Pour $x\in U_0$, le segment $[0,x]$ est dans $U_0$ (boule convexe). La formule de Taylor avec reste intégral à l'ordre $1$ ([[ch05-taylor-reste-integral]]) donne, puisque $f(0)=0$ et $df_0=0$,
$$
f(x)=f(0)+df_0(x)+\int_0^1(1-t)\,d^2f_{tx}(x,x)\,dt=\int_0^1(1-t)\,{}^tx\,\mathrm{Hess}_{tx}f\,x\,dt={}^tx\,B(x)\,x,
$$
avec
$$
B(x)=\int_0^1(1-t)\,\mathrm{Hess}_{tx}f\,dt\in\Sym_m .
$$
$B(x)$ est symétrique comme intégrale de matrices symétriques. $B$ est $C^\infty$ sur $U_0$ : l'intégrande $(t,x)\mapsto(1-t)\,\mathrm{Hess}_{tx}f$ est $C^\infty$ sur $[0,1]\times U_0$, et toutes ses dérivées partielles en $x$ sont continues sur $[0,1]\times U_0$, ce qui permet de dériver sous le signe intégral à tout ordre. Enfin
$$
B(0)=\Big(\int_0^1(1-t)\,dt\Big)\,2I_{r,s}=\tfrac12\cdot2I_{r,s}=I_{r,s}.
$$

**Question 3 : racine carrée lisse pour la congruence.** Soit $g:\mathrm M_m(\R)\to\Sym_m$, $g(C)={}^tC\,I_{r,s}\,C$. C'est la restriction à la diagonale de l'application bilinéaire continue $(C,D)\mapsto{}^tC\,I_{r,s}\,D$, donc ([[ch05-differentielle-bilineaire]]) $g$ est $C^\infty$ et
$$
dg_C(X)={}^tX\,I_{r,s}\,C+{}^tC\,I_{r,s}\,X,\qquad dg_{I_m}(X)={}^tX\,I_{r,s}+I_{r,s}X={}^t(I_{r,s}X)+I_{r,s}X ,
$$
car $I_{r,s}$ est symétrique. Ainsi $\ker dg_{I_m}=\{X : I_{r,s}X\in\mathrm{ASym}_m\}$. L'application $X\mapsto I_{r,s}X$ est un automorphisme linéaire de $\mathrm M_m(\R)$ (involutif car $I_{r,s}^2=I_m$) ; elle envoie $\mathcal E:=\{X: I_{r,s}X\in\Sym_m\}$ sur $\Sym_m$ et $\ker dg_{I_m}$ sur $\mathrm{ASym}_m$. Comme $\mathrm M_m(\R)=\Sym_m\oplus\mathrm{ASym}_m$, on obtient
$$
\mathrm M_m(\R)=\mathcal E\oplus\ker dg_{I_m}.
$$
Pour $X\in\mathcal E$, $S=I_{r,s}X$ est symétrique et $dg_{I_m}(X)=2S$ : la restriction $dg_{I_m}|_{\mathcal E}:\mathcal E\to\Sym_m$ est l'isomorphisme $X\mapsto 2I_{r,s}X$ (d'inverse $S\mapsto\frac12I_{r,s}S$).

Notons que $I_m\in\mathcal E$ (car $I_{r,s}I_m\in\Sym_m$). L'application $G=g|_{\mathcal E}:\mathcal E\to\Sym_m$ est $C^\infty$ (restriction à un sous-espace, [[ch05-restriction-sous-espace]]), $G(I_m)=I_{r,s}$ et $dG_{I_m}=dg_{I_m}|_{\mathcal E}$ est un isomorphisme entre espaces de dimension finie. Par **inversion locale** ([[ch06-inversion-locale]]), il existe un voisinage ouvert $\Omega$ de $I_m$ dans $\mathcal E$ et un voisinage ouvert $Y$ de $I_{r,s}$ dans $\Sym_m$ tels que $G:\Omega\to Y$ soit un $C^\infty$-difféomorphisme. Quitte à remplacer $\Omega$ par $\Omega\cap\GL(m,\R)$ (ouvert contenant $I_m$) et $Y$ par son image (ouverte, car $G|_\Omega$ est un homéomorphisme sur l'ouvert $Y$), on peut supposer $\Omega\subset\GL(m,\R)$. Posons $\eta=(G|_\Omega)^{-1}:Y\to\Omega\subset\GL(m,\R)$ : elle est $C^\infty$, $\eta(I_{r,s})=I_m$ et $g(\eta(S))=S$, c'est-à-dire
$$
S={}^t\eta(S)\,I_{r,s}\,\eta(S)\qquad(S\in Y).
$$

**Question 4 : le changement de variables.** $B$ est continue, $B(0)=I_{r,s}\in Y$ et $Y$ est ouvert : il existe une boule ouverte $U_1\subset U_0$ centrée en $0$ avec $B(U_1)\subset Y$. Pour $x\in U_1$, posons
$$
\varphi(x)=\eta\big(B(x)\big)\,x\in\R^m .
$$
$\varphi$ est $C^\infty$ (composée et produit matrice-vecteur, bilinéaire), $\varphi(0)=0$, et
$$
{}^t\varphi(x)\,I_{r,s}\,\varphi(x)={}^tx\;{}^t\eta(B(x))\,I_{r,s}\,\eta(B(x))\;x={}^tx\,B(x)\,x=f(x).
$$
Calcul de $d\varphi_0$ : $\varphi(x)-\varphi(0)=\eta(B(0))\,x+\big(\eta(B(x))-\eta(B(0))\big)x=x+o(\norm{x})$, car $\eta(B(0))=I_m$ et $\norm{\eta(B(x))-I_m}\to0$ quand $x\to0$ (continuité de $\eta\circ B$). Donc $d\varphi_0=\mathrm{Id}_{\R^m}$, inversible.

Par **inversion locale** une seconde fois, il existe un voisinage ouvert $U_2\subset U_1$ de $0$ et un voisinage ouvert $W$ de $\varphi(0)=0$ tels que $\varphi:U_2\to W$ soit un $C^\infty$-difféomorphisme. Posons $\psi=(\varphi|_{U_2})^{-1}:W\to U_2$. Alors $\psi(0)=0$ et, pour $h\in W$, avec $x=\psi(h)$ :
$$
f(\psi(h))={}^t\varphi(x)\,I_{r,s}\,\varphi(x)={}^th\,I_{r,s}\,h=\sum_{i=1}^rh_i^2-\sum_{i=r+1}^mh_i^2 .
$$
Avec la réduction de la question 1, c'est la conclusion. $\square$

## Preuve à trous

*Réduction.* Par Sylvester, on choisit $P\in\GL(m,\R)$ avec ${}^tP\,\mathrm{Hess}_af\,P=2I_{r,s}$ et on remplace $f$ par $x\mapsto f(a+Px)-f(a)$ : on suppose $a=0$, $f(0)=0$, $\mathrm{Hess}_0f=2I_{r,s}$, et on fixe une boule $U_0$ centrée en $0$.

*Taylor.* Comme $f(0)=0$ et $df_0=0$, Taylor avec reste intégral donne $f(x)={}^tx\,B(x)\,x$ avec <trou indice="reste intégral à l'ordre 1">$B(x)=\int_0^1(1-t)\,\mathrm{Hess}_{tx}f\,dt$</trou>, matrice symétrique dépendant de façon $C^\infty$ de $x$, et $B(0)=\frac12\cdot2I_{r,s}=I_{r,s}$.

*Racine carrée.* Pour $g(C)={}^tC\,I_{r,s}\,C$, on trouve <trou>$dg_{I_m}(X)={}^tX\,I_{r,s}+I_{r,s}X$</trou>, et $\mathrm M_m(\R)=\mathcal E\oplus\ker dg_{I_m}$ avec $\mathcal E=\{X: I_{r,s}X\in\Sym_m\}$, car <trou indice="transporter la décomposition Sym ⊕ ASym">$X\mapsto I_{r,s}X$ est un automorphisme qui envoie $\mathcal E$ sur $\Sym_m$ et $\ker dg_{I_m}$ sur $\mathrm{ASym}_m$</trou>. Comme $dg_{I_m}|_{\mathcal E}$ est un isomorphisme sur $\Sym_m$, l'inversion locale appliquée à $g|_{\mathcal E}$ en $I_m$ donne $\eta:Y\to\GL(m,\R)$, $C^\infty$, avec $\eta(I_{r,s})=I_m$ et $S={}^t\eta(S)\,I_{r,s}\,\eta(S)$ sur un voisinage $Y$ de $I_{r,s}$.

*Changement de variables.* Pour $x$ proche de $0$, on pose $\varphi(x)=\eta(B(x))\,x$. Alors ${}^t\varphi(x)\,I_{r,s}\,\varphi(x)={}^tx\,B(x)\,x=f(x)$, et <trou indice="développer η(B(x)) autour de x = 0">$\varphi(x)=x+\big(\eta(B(x))-I_m\big)x=x+o(\norm{x})$, donc $d\varphi_0=\mathrm{Id}$</trou>. Par inversion locale, $\varphi$ est un $C^\infty$-difféomorphisme d'un voisinage de $0$ sur un voisinage $W$ de $0$, et $\psi=\varphi^{-1}$ vérifie $f(\psi(h))={}^th\,I_{r,s}\,h$. $\square$

## Exemples

* **Un col explicite.** $f(x,y)=x^2-y^2+x^3$ en $(0,0)$ : $df_0=0$, $\mathrm{Hess}_0f=\mathrm{diag}(2,-2)=2I_{1,1}$, déjà normalisée. On écrit $f=x^2(1+x)-y^2$ et on pose, pour $x\gt-1$, $\varphi(x,y)=\big(x\sqrt{1+x},\,y\big)$. Alors $f=\varphi_1^2-\varphi_2^2$, $\varphi$ est $C^\infty$, $d\varphi_0=\mathrm{Id}$ (car $x\sqrt{1+x}=x+\frac{x^2}2+O(x^3)$) ; par inversion locale $\psi=\varphi^{-1}$ convient : $f(\psi(h))=h_1^2-h_2^2$. Les lignes de niveau de $f$ près de $0$ sont des images difféomorphes d'hyperboles.
* **Un maximum.** $f(x,y)=\cos x+\cos y$ en $(0,0)$ : $f(0,0)=2$, hessienne $-I_2$, signature $(0,2)$. Comme $\cos x=1-2\sin^2(x/2)$, $f=2-\big(\sqrt2\sin\frac x2\big)^2-\big(\sqrt2\sin\frac y2\big)^2$. L'application $\varphi(x,y)=\big(\sqrt2\sin\frac x2,\sqrt2\sin\frac y2\big)$ a pour jacobien $\frac12\cos\frac x2\cos\frac y2\ne0$ près de $0$ ; avec $\psi=\varphi^{-1}$ : $f(\psi(h))=2-h_1^2-h_2^2$. D'où un maximum local strict.
* **Conséquences.** (i) Un point critique non dégénéré est **isolé** parmi les points critiques : dans la carte, $d(f\circ\psi)_h=2\,{}^th\,I_{r,s}$ ne s'annule qu'en $h=0$, et $d(f\circ\psi)_h=df_{\psi(h)}\circ d\psi_h$ avec $d\psi_h$ inversible. (ii) Signature $(m,0)$ : $f(\psi(h))-f(a)=\norm{h}^2\gt0$ pour $h\ne0$, donc minimum local strict ; $(0,m)$ : maximum local strict ; $r,s\ge1$ : col.

## Pièges

* > ⚠️ Le lemme ne s'applique **qu'en un point critique non dégénéré** : vérifier $df_a=0$ **et** $\det\mathrm{Hess}_af\ne0$.
* > ⚠️ Ce n'est pas la formule de Taylor : Taylor donne $f(a+h)=f(a)+\frac12d^2f_a(h,h)+o(\norm{h}^2)$ ; Morse supprime **exactement** le reste, au prix d'un changement de variables non linéaire $\psi$ (tangent, à un linéaire près, à l'identité).
* Le changement de variables $\psi$ est seulement **local** et n'est pas unique (on peut composer par toute isométrie de la forme $I_{r,s}$).
* Ne pas oublier le facteur $2$ : la hessienne normalisée est $2I_{r,s}$, et $f(x)=\frac12\,{}^tx\,\mathrm{Hess}\,x+\dots$ ; avec cette normalisation, $B(0)=I_{r,s}$.
* Dans la question 3, on applique l'inversion locale à $g$ **restreinte à $\mathcal E$** : $g$ elle-même va de $\mathrm M_m(\R)$ (dimension $m^2$) dans $\Sym_m$ (dimension $\frac{m(m+1)}2$), sa différentielle n'est pas injective.
