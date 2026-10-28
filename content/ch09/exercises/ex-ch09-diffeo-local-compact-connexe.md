---
id: ex-ch09-diffeo-local-compact-connexe
type: exercise
chapters: [9]
title: Immersion d'une sous-variété compacte dans une connexe de même dimension
source: "Classique (Guillemin–Pollack, *Differential Topology*, ch. 1, § 3, « stack of records theorem », adapté)"
difficulty: 3
time: 40
tools: [ch09-immersion-submersion-sous-varietes-def, ch09-remarques-applications-cr, ch09-espace-tangent-image-dx, ch09-inversion-locale-sous-varietes, ch09-differentielle-entre-sous-varietes-def, ch09-ex-ouvert-sous-variete, ch09-ex-sphere]
---
## Énoncé

Soient $S_1\subset\R^{N_1}$ et $S_2\subset\R^{N_2}$ deux sous-variétés de même dimension $m\ge1$, avec $S_1$ **compacte non vide** et $S_2$ **connexe**. Soit $\varphi:S_1\to S_2$ une application de classe $C^1$ telle que, pour tout $p\in S_1$, la différentielle $d\varphi_p:T_pS_1\to T_{\varphi(p)}S_2$ soit injective.

1. Montrer que $\varphi(S_1)$ est un ouvert de $S_2$.
2. Montrer que $\varphi$ est surjective.
3. Montrer que pour tout $y\in S_2$, la fibre $\varphi^{-1}(\{y\})$ est finie.
4. Montrer que l'application $y\mapsto\#\varphi^{-1}(\{y\})$ est constante sur $S_2$.
5. Applications.
   a. Montrer qu'il n'existe aucune application $\psi:\mathbb S^2\to\R^2$ de classe $C^1$ dont la différentielle soit injective en tout point.
   b. Soit $\varphi:\mathbb S^1\to\mathbb S^1$ définie par $\varphi(\cos\theta,\sin\theta)=(\cos3\theta,\sin3\theta)$. Vérifier que $\varphi$ satisfait les hypothèses ci-dessus et calculer la constante de la question 4.

## Indices

### Indice 1
Une différentielle injective entre deux espaces tangents **de même dimension** est un isomorphisme : quel théorème local en tirer ? Pour la surjectivité, penser à l'argument « ouvert, fermé, non vide dans un connexe ».

### Indice 2
Le théorème d'inversion locale sur les sous-variétés donne, autour de chaque $p\in S_1$, un ouvert $V_1\ni p$ de $S_1$ envoyé difféomorphiquement par $\varphi$ sur un ouvert $V_2\ni\varphi(p)$ de $S_2$. L'image $\varphi(S_1)$ est compacte, donc fermée. Pour la question 3 : une fibre est compacte et ses points sont isolés.

### Indice 3
Question 4 : si $\varphi^{-1}(\{y\})=\{p_1,\dots,p_k\}$, choisir des voisinages $V_i\ni p_i$ **deux à deux disjoints** sur lesquels $\varphi$ est un difféomorphisme sur des ouverts $W_i\ni y$, puis retirer l'image du compact $S_1\setminus\bigcup_iV_i$ : sur $W=\bigcap_iW_i\setminus\varphi\big(S_1\setminus\bigcup_iV_i\big)$, chaque point a exactement $k$ antécédents.

## Corrigé

**1.** Soit $p\in S_1$. Par la Proposition IX.7.9 ([[ch09-espace-tangent-image-dx]]), $T_pS_1$ et $T_{\varphi(p)}S_2$ sont des espaces vectoriels de même dimension $m$ ; l'application linéaire injective $d\varphi_p$ ([[ch09-differentielle-entre-sous-varietes-def]]) entre eux est donc un isomorphisme. Les hypothèses du théorème d'inversion locale sur les sous-variétés ([[ch09-inversion-locale-sous-varietes]]) sont satisfaites ($\varphi$ de classe $C^1$, $d\varphi_p$ isomorphisme) : il existe un voisinage ouvert $V_1(p)$ de $p$ dans $S_1$ et un voisinage ouvert $V_2(p)$ de $\varphi(p)$ dans $S_2$ tels que $\varphi$ réalise un $C^1$-difféomorphisme de $V_1(p)$ sur $V_2(p)$. En particulier $\varphi(S_1)=\bigcup_{p\in S_1}V_2(p)$ est une réunion d'ouverts de $S_2$ : c'est un ouvert de $S_2$.

**2.** $\varphi$ est continue (elle est $C^1$) et $S_1$ est compacte, donc $\varphi(S_1)$ est une partie compacte de $\R^{N_2}$, donc fermée dans $\R^{N_2}$, donc fermée dans $S_2$ pour la topologie induite. Elle est non vide car $S_1\ne\emptyset$, et ouverte dans $S_2$ par la question 1. Comme $S_2$ est connexe, $\varphi(S_1)=S_2$.

**3.** Soit $y\in S_2$ et $F=\varphi^{-1}(\{y\})$. C'est un fermé de $S_1$ (image réciproque du fermé $\{y\}$ par l'application continue $\varphi$), donc un compact. Pour $p\in F$, $\varphi$ est injective sur $V_1(p)$ (question 1), donc $F\cap V_1(p)=\{p\}$. Les ouverts $V_1(p)$, $p\in F$, recouvrent le compact $F$ ; on en extrait un sous-recouvrement fini $V_1(p_1),\dots,V_1(p_k)$, et $F\subset\{p_1,\dots,p_k\}$ : $F$ est finie.

**4.** Notons $n(y)=\#\varphi^{-1}(\{y\})$ ; par 2 et 3, $1\le n(y)<+\infty$. Montrons que $n$ est localement constante. Soit $y\in S_2$, $\varphi^{-1}(\{y\})=\{p_1,\dots,p_k\}$ (points distincts).

* *Voisinages disjoints.* Soit $\delta>0$ inférieur à la moitié de $\min_{i\ne j}\norm{p_i-p_j}$, et $V_i=V_1(p_i)\cap B(p_i,\delta)$ : ouverts de $S_1$ deux à deux disjoints, $p_i\in V_i$. La restriction de $\varphi$ à $V_i$ est encore un difféomorphisme sur $W_i=\varphi(V_i)$, qui est ouvert dans $V_2(p_i)$ (image d'un ouvert par un homéomorphisme), donc dans $S_2$, et contient $y$.
* *Le reste.* $K=S_1\setminus\bigcup_iV_i$ est fermé dans le compact $S_1$, donc compact, et $\varphi(K)$ est compact donc fermé ; $y\notin\varphi(K)$ car tous les antécédents de $y$ sont dans $\bigcup_iV_i$.
* $W=\big(\bigcap_{i=1}^kW_i\big)\setminus\varphi(K)$ est donc un voisinage ouvert de $y$ dans $S_2$. Soit $y'\in W$. Aucun antécédent de $y'$ n'est dans $K$ ; dans chaque $V_i$, $y'$ a exactement un antécédent (car $y'\in W_i$ et $\varphi|_{V_i}$ est une bijection sur $W_i$) ; les $V_i$ étant disjoints, $n(y')=k=n(y)$.

Ainsi $n:S_2\to\N$ est localement constante, donc continue ; $S_2$ étant connexe, elle est constante. (Pour chaque $k$, $\{n=k\}$ est ouvert ; ces ouverts disjoints recouvrent le connexe $S_2$, un seul est non vide.)

**5a.** Supposons qu'une telle $\psi$ existe. $\mathbb S^2$ est une sous-variété compacte non vide de dimension $2$ de $\R^3$ ([[ch09-ex-sphere]]) ; $\R^2$ est une sous-variété connexe de dimension $2$ de lui-même ([[ch09-ex-ouvert-sous-variete]]), d'espace tangent $\R^2$ en tout point. Les hypothèses sont satisfaites avec $m=2$, donc par 2, $\psi(\mathbb S^2)=\R^2$. Mais $\psi(\mathbb S^2)$ est compact et $\R^2$ ne l'est pas : contradiction. (Plus généralement : aucune sous-variété compacte non vide de dimension $m\ge1$ ne s'immerge dans $\R^m$.)

**5b.** *Régularité.* Identifions $\R^2$ à $\C$ : $\varphi$ est la restriction à $\mathbb S^1$ de $\Phi(x,y)=(x^3-3xy^2,\ 3x^2y-y^3)$ (parties réelle et imaginaire de $(x+iy)^3$), polynomiale donc $C^\infty$ sur $\R^2$ ; ainsi $\varphi$ est $C^\infty$ comme application de $\mathbb S^1$ dans $\R^2$, à valeurs dans $\mathbb S^1$ (car $|z^3|=1$ si $|z|=1$), donc $C^\infty$ de $\mathbb S^1$ dans $\mathbb S^1$ (Remarques IX.7.7, point 2, [[ch09-remarques-applications-cr]]). Elle est bien définie : $(\cos3\theta,\sin3\theta)$ ne dépend que de $\theta$ modulo $2\pi$.

*Injectivité de la différentielle.* Soit $p=(\cos\theta,\sin\theta)$ et $\alpha(t)=(\cos(\theta+t),\sin(\theta+t))$ : courbe $C^1$ tracée sur $\mathbb S^1$, $\alpha(0)=p$, $\alpha'(0)=(-\sin\theta,\cos\theta)\ne0$, qui engendre donc $T_p\mathbb S^1$ (de dimension $1$). Par la caractérisation par les courbes de la différentielle ([[ch09-differentielle-entre-sous-varietes-def]]),
$$
d\varphi_p\big(\alpha'(0)\big)=\frac{d}{dt}\Big|_{t=0}\big(\cos(3\theta+3t),\sin(3\theta+3t)\big)=3\,(-\sin3\theta,\cos3\theta)\ne0 .
$$
$d\varphi_p$ est donc injective. $\mathbb S^1$ est compacte, non vide, connexe (image de $\R$ par $\theta\mapsto(\cos\theta,\sin\theta)$), de dimension $1$ : les hypothèses sont satisfaites avec $S_1=S_2=\mathbb S^1$.

*La constante.* $\varphi(\cos\theta,\sin\theta)=(1,0)\iff3\theta\in2\pi\Z\iff\theta\in\frac{2\pi}3\Z$, ce qui donne exactement trois points de $\mathbb S^1$ ($\theta=0,\frac{2\pi}3,\frac{4\pi}3$). Donc tout point de $\mathbb S^1$ a exactement **3** antécédents (ce sont les trois racines cubiques d'un complexe de module $1$).

## Pièges et variantes

* **Même dimension** : sans elle, « injective » ne donne pas « isomorphisme » et l'inversion locale ne s'applique pas ; l'inclusion $\mathbb S^1\hookrightarrow\R^2$ est une immersion d'un compact dans un connexe, non surjective.
* **Compacité de $S_1$** : l'inclusion d'un arc ouvert dans $\mathbb S^1$, ou $t\mapsto(\cos t,\sin t)$ de $\R$ dans $\mathbb S^1$ (fibres infinies), montrent qu'elle sert pour la fermeture de l'image (question 2) et la finitude des fibres (question 3).
* **Connexité de $S_2$** : si $S_2$ a deux composantes, $\varphi$ peut n'en atteindre qu'une.
* À la question 4, ne pas oublier de retirer $\varphi(K)$ : sans cela, des points de $S_1$ éloignés des $p_i$ pourraient fournir des antécédents supplémentaires aux points voisins de $y$. C'est là que la compacité ressert.
* Variante : si de plus $\varphi$ est injective, alors $\varphi$ est un $C^1$-difféomorphisme de $S_1$ sur $S_2$ (bijective par 2, et son inverse est $C^1$ au voisinage de chaque point par l'inversion locale).
* Variante (sans compacité) : si $S_1$ n'est plus supposée compacte mais $\varphi$ est **propre** (l'image réciproque de tout compact est compacte), les questions 2 à 4 restent vraies : une application propre est fermée, ce qui remplace la compacité de $S_1$ (question 2) et celle de $K$ (question 4), et les fibres sont compactes (question 3).
* Variante : l'application $z\mapsto z^k$ ($k\in\Z\setminus\{0\}$) de $\mathbb S^1$ dans $\mathbb S^1$ a des fibres de cardinal $|k|$ ; pour $k=0$, la différentielle est nulle et l'énoncé ne s'applique pas.
