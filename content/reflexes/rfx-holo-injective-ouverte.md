---
id: rfx-holo-injective-ouverte
type: reflexe
situation: Montrer qu'une fonction holomorphe est injective, ouverte, ou un biholomorphisme
chapters: [1, 2, 3]
---
## Situation

On a $f\in\Hol(\Omega)$, $\Omega$ connexe, parfois donnée explicitement ($z+az^2$, $z/(1-z)^2$, une homographie, $e^z$ sur une bande), parfois comme limite d'une suite ou comme élément extrémal d'une famille. On veut : « $f(\Omega)$ est ouvert », « $f$ est injective », « $f$ réalise un biholomorphisme de $\Omega$ sur $f(\Omega)$ (ou sur $D$) », « $f^{-1}$ est holomorphe », « $f$ est un automorphisme de $D$ », « $f'$ ne s'annule pas ». Mots-clés : *bijection holomorphe*, *conforme*, *automorphisme*, *application ouverte*, *univalente*, *réciproque*.

## Options

### [x] Théorème de l'application ouverte — [[ch01-application-ouverte]]
**Quand.** $\Omega$ connexe, $f$ **non constante** : alors $f(U)$ est ouvert pour tout ouvert $U\subset\Omega$. Déclencheurs : « montrer que $f(\Omega)$ est ouvert », « $f$ est ouverte », « $f(\Omega)$ contient un disque autour de $f(z_0)$ », ou comme ingrédient pour « bijection $\Rightarrow$ homéomorphisme » (la réciproque d'une bijection ouverte est continue).
**Justification.** Localement $f(z)=f(z_0)+(z-z_0)^mh(z)$ avec $h(z_0)\ne0$ ; $f-f(z_0)$ est, à un biholomorphisme local près, $z\mapsto z^m$, qui est surjective sur un petit disque.
**Pièges.** Non constante **sur la composante connexe** considérée. Ne confondre pas « ouverte » et « injective » : $z\mapsto z^2$ est ouverte sur $\C^\times$ et non injective. Les correcteurs attendent la phrase « $f$ n'est pas constante car ... ».

### [x] Bijection holomorphe $\Rightarrow$ biholomorphisme ($f'\ne0$ automatique) — [[ch01-bijection-holomorphe-reciproque-holomorphe]]
**Quand.** On a déjà montré que $f:\Omega_1\to\Omega_2$ est une **bijection** holomorphe entre ouverts : alors $f'$ ne s'annule pas et $f^{-1}$ est holomorphe. Le plan type « biholomorphisme » est donc : (a) $f$ holomorphe, (b) $f$ injective, (c) $f(\Omega_1)=\Omega_2$ (ou on prend $\Omega_2=f(\Omega_1)$, ouvert par l'option 1), (d) citer la remarque.
**Justification.** Si $f'(z_0)=0$, alors $f=f(z_0)+h^N$ près de $z_0$ avec $N\ge2$ et $h$ biholomorphisme local : $f$ n'est pas injective près de $z_0$. Puis inversion locale holomorphe [[ch01-inversion-locale-holomorphe]] : $(f^{-1})'=1/(f'\circ f^{-1})$.
**Pièges.** Dire « $f$ injective donc $f'\ne0$ » est **vrai** en holomorphe (contrairement au cas réel : $x\mapsto x^3$) mais il faut le **citer**. En revanche la réciproque « $f'\ne0$ partout $\Rightarrow$ injective » est **fausse** (option 5).

### [x] Théorème de Hurwitz (injectivité d'une limite) — [[ch03-hurwitz]]
**Quand.** $f=\lim f_n$ localement uniformément sur $\Omega$ connexe, les $f_n$ **injectives** : alors $f$ est injective **ou constante**. Déclencheur : « soit $(f_n)$ une suite de biholomorphismes / d'automorphismes qui converge », « montrer que la limite est injective ».
**Justification.** Si $f(a)=f(b)$ avec $a\ne b$ et $f$ non constante, $f-f(a)$ a des zéros isolés en $a$ et $b$ ; par Rouché sur deux petits cercles disjoints, $f_n-f(a)$ a un zéro près de $a$ et un près de $b$ pour $n$ grand : contradiction avec l'injectivité de $f_n$.
**Pièges.** Exclure le cas **constant** par une information supplémentaire ($f'(z_0)\ne0$, $f(z_0)$ et $f(z_1)$ distincts, normalisation $f_n(0)=0$, $f_n'(0)=1$). Hurwitz ne dit rien de l'**image** de la limite : $f_n(z)=z/n$ est un biholomorphisme de $D$ sur $D(0,1/n)$, de limite constante ; même non constante, la surjectivité de $f$ sur une cible donnée demande un argument séparé.

### [x] Compter les solutions de $f(z)=w$ (Rouché, principe de l'argument) — [[ch02-rouche]]
**Quand.** $f$ est explicite et on veut l'injectivité sur un disque ou la **surjectivité** sur un ouvert cible : $f$ est injective sur $U$ si et seulement si, pour tout $w$, $f-w$ a **au plus un** zéro dans $U$ (comptés avec multiplicité) ; et $w\in f(U)$ si et seulement si $f-w$ a au moins un zéro. Déclencheur : « montrer que $f(z)=w$ a exactement une solution dans $D$ pour tout $w\in\dots$ ».
**Justification.** Principe de l'argument [[ch02-principe-argument-domaine]] : $Z(f-w,U)=\Ind_{f(\partial U)}(w)$, constant en $w$ sur les composantes connexes de $\C\setminus f(\partial U)$ ; ou Rouché avec une fonction de référence $g$ ($g(z)=z$ pour $f(z)=z+\eps\varphi(z)$).
**Pièges.** Le bord ne doit contenir aucun zéro de $f-w$ ; l'inégalité stricte $|f-g|<|g|$ doit être vérifiée **sur tout le bord**. Pour les énoncés très explicites (polynômes de degré $2$), la factorisation directe $f(z)-f(w)=(z-w)\,q(z,w)$ avec $q\ne0$ est plus rapide que Rouché.

### [ ] Inversion locale holomorphe ($f'\ne0$ partout) — [[ch01-inversion-locale-holomorphe]]
**Pourquoi ce n'est pas l'outil ici.** $f'(z)\ne0$ pour tout $z$ donne un biholomorphisme **local** autour de chaque point, jamais l'injectivité globale : $\exp$ a une dérivée partout non nulle et n'est pas injective sur $\C$ (ni sur aucune bande de largeur $>2\pi$) ; $z\mapsto z^2$ sur $\C^\times$ non plus. « Local » est le mot clé ([[ch01-sens-de-local]]).
**Quand il le serait.** Pour l'injectivité **locale** (« $f$ est injective au voisinage de $z_0$ ») ; ou pour montrer que $f^{-1}$ est holomorphe **après** avoir prouvé la bijectivité par ailleurs ; ou pour exhiber un logarithme/racine locale.

### [ ] Théorème de représentation conforme de Riemann — [[ch03-riemann-representation-conforme]]
**Pourquoi ce n'est pas l'outil ici.** Riemann affirme qu'il **existe** un biholomorphisme de $\Omega$ (connexe, simplement connexe, $\ne\C$) sur $D$ ; il ne dit rien sur la fonction $f$ **donnée** par l'énoncé, et ne la calcule pas.
**Quand il le serait.** Pour montrer qu'un ouvert est conformément équivalent à $D$ sans expliciter l'application, ou pour ramener un problème sur $\Omega$ au disque (automorphismes, fonctions harmoniques [[ch04-reduction-demi-plan]]). Pour un biholomorphisme **explicite** $D\to H$, c'est Cayley [[ch01-cayley-disque-demi-plan]].

## Démarche

1. **Ouverte ?** Vérifier $\Omega$ connexe et $f$ non constante (par exemple $f'(z_0)\ne0$ en un point, ou deux valeurs distinctes) : application ouverte. Si $\Omega$ n'est pas connexe, raisonner composante par composante.
2. **Injective ?** Selon la donnée :
   * $f$ explicite : factoriser $f(z)-f(w)=(z-w)q(z,w)$ et montrer $q\ne0$ sur $\Omega\times\Omega$ (inégalité triangulaire, module) ; ou résoudre $f(z)=f(w)$ ; ou monotonie d'un paramètre réel (bande $\to$ demi-plan via $\exp$).
   * $f$ limite d'injectives : Hurwitz + exclusion du cas constant.
   * $f$ perturbation d'une fonction injective connue : Rouché sur chaque disque, ou principe de l'argument.
   * Un contre-exemple est demandé : $\exp$, $z^2$, ou toute fonction avec $f'(z_0)=0$ (alors $f$ n'est pas injective près de $z_0$, option 2).
3. **Biholomorphisme ?** Injective (étape 2) $+$ holomorphe $\Rightarrow$ $f:\Omega\to f(\Omega)$ est un biholomorphisme sur l'ouvert $f(\Omega)$ (options 1 et 2). Si la cible $\Omega_2$ est imposée, prouver en plus la **surjectivité** : résolution explicite de $f(z)=w$, ou argument « $f(\Omega)$ est ouvert et fermé dans $\Omega_2$ connexe » (fermeture par un argument de compacité/propreté), ou comptage par Rouché.
4. **Automorphisme de $D$ ?** Montrer $f(D)\subset D$ et la bijectivité, puis identifier $f=\lambda f_a$ par [[ch01-automorphismes-disque]] ; pour une rigidité (« $f$ est une rotation »), utiliser le cas d'égalité du lemme de Schwarz [[ch01-lemme-schwarz]] ou composer par $f_a$ pour se ramener à $f(0)=0$.
5. **Rédaction** : écrire les trois morceaux « holomorphe », « bijective », « réciproque holomorphe (Remarque I.14.3) », et nommer les ouverts source et but.

## Pièges

* « $f'\ne0$ partout » $\not\Rightarrow$ injective (c'est **l'erreur** classique du chapitre).
* Oublier de prouver la **surjectivité** quand la cible est imposée ; une injection holomorphe $D\to D$ n'est pas forcément un automorphisme ($z\mapsto z/2$).
* Appliquer Hurwitz sans connexité, ou sans exclure la limite constante.
* Dans Rouché, bord contenant un zéro, ou inégalité vérifiée seulement en un point du bord.
* « Bijection continue » $\not\Rightarrow$ homéomorphisme en général : ici c'est vrai grâce à l'application ouverte — le dire plutôt que l'admettre.
* Confondre les automorphismes de $D$ ($\lambda(z-a)/(1-\bar az)$) et ceux de $\C$ ($az+b$, [[ch02-automorphismes-de-c]]).

## Mini-exemple

*Énoncé.* Soit $a\in\C$ avec $|a|\le\tfrac12$ et $f(z)=z+az^2$. Montrer que $f$ est un biholomorphisme de $D=D(0,1)$ sur l'ouvert $f(D)$.

*Solution.* $f$ est polynomiale donc holomorphe sur $D$. **Injectivité :** pour $z,w\in D$, $f(z)-f(w)=(z-w)\bigl(1+a(z+w)\bigr)$ et $|a(z+w)|\le|a|(|z|+|w|)\le\tfrac12(|z|+|w|)<1$, donc $1+a(z+w)\ne0$ ; ainsi $f(z)=f(w)\Rightarrow z=w$. **Image ouverte :** $f$ n'est pas constante ($f'(0)=1$) et $D$ est connexe, donc $f(D)$ est un ouvert par le théorème de l'application ouverte [[ch01-application-ouverte]]. **Réciproque :** $f:D\to f(D)$ est une bijection holomorphe entre ouverts, donc $f'$ ne s'annule pas sur $D$ et $f^{-1}$ est holomorphe ([[ch01-bijection-holomorphe-reciproque-holomorphe]]) ; on peut le vérifier directement : $f'(z)=1+2az$ et $|2az|\le|z|<1$. Donc $f$ est un biholomorphisme de $D$ sur $f(D)$. (Pour $|a|>\tfrac12$ l'injectivité tombe : $f'(-1/(2a))=0$ avec $|{-1/(2a)}|<1$.)
